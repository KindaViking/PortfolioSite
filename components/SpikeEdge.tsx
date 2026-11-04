// A row of jagged spikes used to tear the bottom edge of a fiery section into the black page.
export default function SpikeEdge({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      className={`block h-6 w-full text-pitch sm:h-10 ${className}`}
    >
      <path
        fill="currentColor"
        d="M0 40 L0 22 L40 34 L70 8 L110 30 L150 14 L190 36 L230 4 L270 28 L320 16 L360 34 L400 10 L450 30 L490 18 L530 36 L580 6 L620 30 L660 20 L710 36 L750 12 L800 32 L840 2 L880 28 L930 16 L970 34 L1010 10 L1060 30 L1100 20 L1140 36 L1190 8 L1230 30 L1270 14 L1320 34 L1360 18 L1400 32 L1440 12 L1440 40 Z"
      />
    </svg>
  );
}
