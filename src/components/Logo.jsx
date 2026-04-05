export default function Logo({ variant = 'nav', style = {} }) {
  const heights = { nav: 52, footer: 40 };
  const h = heights[variant] ?? 52;
  return (
    <img
      src="/images/logofull.png"
      alt="Mevlana Ocakbaşı"
      style={{ height: h, width: 'auto', display: 'block', flexShrink: 0, ...style }}
    />
  );
}
