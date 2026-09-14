import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { HelloBasic, HelloOutline, HelloOverlayBasic, SAMPLES } from './samples';

@Component({
  selector: 'app-root',
  // Angular needs a statically analysable imports array (NG1010); list every sample class here.
  imports: [NgComponentOutlet, HelloBasic, HelloOutline, HelloOverlayBasic],
  template: `
    <main>
      @for (s of samples; track s.id) {
        <section [attr.data-sample]="s.id">
          <h2>{{ s.id }}</h2>
          <ng-container *ngComponentOutlet="s.component" />
        </section>
      }
    </main>
  `,
})
export class App {
  samples = SAMPLES;
}
