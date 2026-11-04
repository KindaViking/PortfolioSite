"use client";

import dynamic from "next/dynamic";

// Three.js only runs in the browser, so the 3D figure loads after the page instead of being prerendered.
const WalkingFigure = dynamic(() => import("@/components/WalkingFigure"), { ssr: false });

export default function FigureStage() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[3%] bottom-[9%] z-[5] hidden h-[70%] w-[32%] md:block"
    >
      {/* firelight pooling at the figure's feet */}
      <div className="absolute inset-x-[15%] bottom-[6%] h-[14%] rounded-[50%] bg-[radial-gradient(closest-side,rgb(255_150_60/0.55),transparent)] blur-md" />
      <WalkingFigure />
    </div>
  );
}
