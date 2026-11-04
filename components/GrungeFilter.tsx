// An SVG filter that roughens edges so type looks stamped and worn, like a metal band logo.
// Rendered once in the layout and referenced from CSS as filter: url(#grunge).
export default function GrungeFilter() {
  return (
    <svg aria-hidden="true" width="0" height="0" className="absolute">
      <filter id="grunge">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" result="rough" />
        <feComponentTransfer in="noise" result="specks">
          <feFuncA type="discrete" tableValues="0 0 0 0 0 1" />
        </feComponentTransfer>
        <feComposite in="rough" in2="specks" operator="out" />
      </filter>
    </svg>
  );
}
