import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';
import { resolveAria } from '@aranghat/primitives/aria';
import { isRtl } from '@aranghat/primitives/dom';

/**
 * Carousel — shadcn/ui parity on Embla (ADR-0005). Slides are `<art-carousel-item>`s in the
 * light DOM; the viewport, track and the previous / next buttons live here. Drag / swipe,
 * arrow keys, `loop`, `align`, horizontal or vertical.
 *
 * @slot - `<art-carousel-item>`s.
 * @part viewport - The clipping box (Embla root).
 * @part container - The moving track.
 * @part previous - The previous button.
 * @part next - The next button.
 */
@Component({ tag: 'art-carousel', styleUrl: 'art-carousel.css', shadow: true })
export class ArtCarousel {
  @Element() host!: HTMLElement;
  private viewport?: HTMLDivElement;
  private container?: HTMLDivElement;
  private embla?: EmblaCarouselType;
  private observer?: MutationObserver;

  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  /** Wrap around at the ends. */
  @Prop() loop = false;
  /** Where a slide settles in the viewport. */
  @Prop() align: 'start' | 'center' | 'end' = 'start';
  /** Show the previous / next buttons. */
  @Prop() controls = true;
  /** Free-scrolling momentum instead of snapping. */
  @Prop({ attribute: 'drag-free' }) dragFree = false;
  @State() private canPrev = false;
  @State() private canNext = false;
  @State() private index = 0;

  /** Emitted when the selected slide changes; `detail.index` is zero-based. */
  @Event({ eventName: 'slide-change', bubbles: true, composed: true }) slideChange!: EventEmitter<{ index: number }>;

  @Prop({ attribute: 'aria-label' }) hostAriaLabel?: string | null;
  @Prop({ attribute: 'aria-labelledby' }) hostAriaLabelledby?: string | null;
  private directLabel?: string;
  private ariaLabel?: string;

  componentWillRender() {
    if (this.hostAriaLabel != null) { this.directLabel = this.hostAriaLabel; this.host.removeAttribute('aria-label'); }
    this.ariaLabel = resolveAria(this.host, { labelledby: this.hostAriaLabelledby }, this.directLabel).label;
  }

  private slides(): HTMLElement[] { return Array.from(this.host.children).filter((c) => c.tagName === 'ART-CAROUSEL-ITEM') as HTMLElement[]; }
  private labelSlides() {
    const slides = this.slides();
    slides.forEach((s, i) => {
      s.setAttribute('data-orientation', this.orientation);
      if (!s.hasAttribute('aria-label')) s.setAttribute('aria-label', `${i + 1} of ${slides.length}`);
    });
  }

  componentDidLoad() {
    this.init();
    this.host.shadowRoot?.addEventListener('slotchange', this.reinit);
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(this.reinit);
      this.observer.observe(this.host, { childList: true });
    }
  }
  disconnectedCallback() {
    this.observer?.disconnect();
    this.embla?.destroy();
    this.embla = undefined;
  }
  @Watch('orientation') @Watch('loop') @Watch('align') @Watch('dragFree')
  onOptions() { this.reinit(); }
  private reinit = () => {
    this.labelSlides();
    this.embla?.reInit(this.options());
    this.sync();
  };
  private options() {
    return { axis: this.orientation === 'vertical' ? 'y' as const : 'x' as const, loop: this.loop, align: this.align, dragFree: this.dragFree, container: this.container ?? null, slides: this.slides(), direction: isRtl(this.host) ? 'rtl' as const : 'ltr' as const };
  }
  private init() {
    // Embla observes the DOM as it starts; a server document has no observers (ADR-0023) — the client initialises on hydration.
    if (typeof MutationObserver === 'undefined') return;
    if (!this.viewport || !this.container) return;
    this.labelSlides();
    this.embla = EmblaCarousel(this.viewport, this.options());
    this.embla.on('select', () => {
      this.sync();
      this.slideChange.emit({ index: this.index });
    });
    this.embla.on('reInit', () => this.sync());
    this.sync();
  }
  private sync() {
    if (!this.embla) return;
    this.canPrev = this.embla.canScrollPrev();
    this.canNext = this.embla.canScrollNext();
    this.index = this.embla.selectedScrollSnap();
  }

  /** Go to the previous slide. */
  @Method() async scrollPrev() { this.embla?.scrollPrev(); }
  /** Go to the next slide. */
  @Method() async scrollNext() { this.embla?.scrollNext(); }
  /** Go to a slide by zero-based index (`scrollTo` is taken by the DOM). */
  @Method() async scrollToSlide(index: number) { this.embla?.scrollTo(index); }
  /** Index of the selected slide. */
  @Method() async selectedIndex() { return this.embla?.selectedScrollSnap() ?? 0; }

  private onKeydown = (e: KeyboardEvent) => {
    const h = this.orientation === 'horizontal';
    const rtl = isRtl(this.host);
    const prev = h ? (rtl ? 'ArrowRight' : 'ArrowLeft') : 'ArrowUp';
    const next = h ? (rtl ? 'ArrowLeft' : 'ArrowRight') : 'ArrowDown';
    if (e.key === prev) { e.preventDefault(); this.embla?.scrollPrev(); }
    else if (e.key === next) { e.preventDefault(); this.embla?.scrollNext(); }
  };

  render() {
    const btn = 'inline-flex items-center justify-center rounded-full border-default bg-canvas text-fg shadow-raised transition-interactive motion-fast hover:bg-accent focus-ring control-icon-sm disabled:pointer-events-none disabled:opacity-50';
    return (
      <Host role="region" aria-roledescription="carousel" aria-label={this.ariaLabel} onKeyDown={this.onKeydown}>
        <div part="viewport" ref={(el) => (this.viewport = el)} class="viewport overflow-hidden">
          <div part="container" ref={(el) => (this.container = el)} class={{ 'track flex': true, 'flex-col': this.orientation === 'vertical' }}>
            <slot />
          </div>
        </div>
        {this.controls && [
          <button part="previous" type="button" class={`control previous ${btn}`} aria-label="Previous slide" disabled={!this.canPrev} onClick={() => this.embla?.scrollPrev()}>
            <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
          </button>,
          <button part="next" type="button" class={`control next ${btn}`} aria-label="Next slide" disabled={!this.canNext} onClick={() => this.embla?.scrollNext()}>
            <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </button>,
        ]}
      </Host>
    );
  }
}
