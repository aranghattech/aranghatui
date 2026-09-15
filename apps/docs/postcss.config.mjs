// VitePress styles every element inside `.vp-doc` (`.vp-doc h1`, `.vp-doc th`, …), which would
// outrank the tag-scoped stylesheets of light-DOM components (Table, Typography) in previews.
// VitePress's documented escape hatch is the `vp-raw` class; this plugin implements it the way
// postcss-isolate-styles does: every `.vp-doc …` selector gets `:not(.vp-raw *)` appended.
const isolateVpDoc = () => ({
  postcssPlugin: 'artui-isolate-vp-doc',
  Rule(rule) {
    if (!/vp-doc\.css/.test(rule.source?.input?.file ?? '')) return;
    rule.selectors = rule.selectors.map((s) => (s.startsWith('.vp-doc') && !s.includes('.vp-raw') ? `${s}:not(.vp-raw *)` : s));
  },
});
isolateVpDoc.postcss = true;

export default { plugins: [isolateVpDoc()] };
