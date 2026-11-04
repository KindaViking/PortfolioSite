// An original winged demon silhouette that flaps and crosses the sky.
// Each one gets its own height, size, speed and delay so the flock never moves in lockstep.
export type FlierProps = {
  top: string;
  size: number;
  duration: number;
  delay: number;
  reverse?: boolean;
};

export default function Flier({ top, size, duration, delay, reverse = false }: FlierProps) {
  return (
    <div
      aria-hidden="true"
      className={`flier ${reverse ? "flier-reverse" : ""}`}
      style={{ top, animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
    >
      <svg
        viewBox="0 0 60 34"
        width={size}
        height={(size * 34) / 60}
        className="flier-bob"
        style={{ animationDelay: `${delay / 3}s` }}
      >
        <g className="flier-wings" fill="#0a0101">
          <path d="M28 15 C21 4 10 3 1 9 C7 10 9 13 11 17 C15 14 19 15 21 20 C23 17 25 17 28 19 Z" />
          <path d="M32 15 C39 4 50 3 59 9 C53 10 51 13 49 17 C45 14 41 15 39 20 C37 17 35 17 32 19 Z" />
        </g>
        <g fill="#0a0101">
          {/* horns */}
          <path d="M27.5 9 L26 3.5 L29 7.5 Z M32.5 9 L34 3.5 L31 7.5 Z" />
          {/* head and body */}
          <circle cx="30" cy="10" r="3" />
          <ellipse cx="30" cy="18" rx="3.6" ry="6" />
          {/* tail */}
          <path d="M30 23 C29 27 31 29 28 32 L30.5 30 C32 28 31 26 31.2 23 Z" />
        </g>
        <circle cx="29" cy="9.6" r="0.7" fill="#ffb347" />
        <circle cx="31" cy="9.6" r="0.7" fill="#ffb347" />
      </svg>
    </div>
  );
}
