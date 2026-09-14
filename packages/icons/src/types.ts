export interface IconData {
  /** lucide icon name */
  name: string;
  /** SVG child elements: [tag, attributes] rendered inside a 24×24 viewBox with stroke=currentColor */
  children: Array<[string, Record<string, string | number>]>;
}
