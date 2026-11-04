import Flier from "@/components/Flier";

// Original hero backdrop: a burning sky, a horned colossus rising behind the ridge,
// a flock of winged demons, a glowing lava rift and the odd lightning strike, all drawn in SVG.
// Everything uses fixed values (not random) so the server and browser render the same thing.
const embers = [
  { left: "6%", size: 3, duration: 9, delay: 0, drift: "30px" },
  { left: "14%", size: 2, duration: 12, delay: 3, drift: "-20px" },
  { left: "23%", size: 4, duration: 10, delay: 6, drift: "40px" },
  { left: "31%", size: 2, duration: 14, delay: 1, drift: "10px" },
  { left: "42%", size: 3, duration: 11, delay: 8, drift: "-35px" },
  { left: "51%", size: 2, duration: 13, delay: 4, drift: "25px" },
  { left: "60%", size: 4, duration: 9, delay: 2, drift: "-15px" },
  { left: "68%", size: 2, duration: 15, delay: 7, drift: "30px" },
  { left: "77%", size: 3, duration: 10, delay: 5, drift: "-30px" },
  { left: "85%", size: 2, duration: 12, delay: 0.5, drift: "20px" },
  { left: "93%", size: 3, duration: 11, delay: 9, drift: "-25px" },
  { left: "72%", size: 5, duration: 8, delay: 3.5, drift: "-40px" },
  { left: "88%", size: 4, duration: 9.5, delay: 6.5, drift: "15px" },
];

const fliers = [
  { top: "30%", size: 64, duration: 24, delay: -6 },
  { top: "40%", size: 40, duration: 32, delay: -20, reverse: true },
  { top: "22%", size: 32, duration: 38, delay: 4 },
  { top: "48%", size: 50, duration: 28, delay: 12, reverse: true },
];

export default function Hellscape() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="22%" stopColor="#1a0203" />
            <stop offset="45%" stopColor="#6e0a0e" />
            <stop offset="62%" stopColor="#c8361a" />
            <stop offset="74%" stopColor="#f08a2a" />
            <stop offset="100%" stopColor="#ffc35a" />
          </linearGradient>
          <radialGradient id="glow" cx="0.7" cy="0.62" r="0.45">
            <stop offset="0%" stopColor="#ffd27a" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#f08a2a" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#e8651a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#000" stopOpacity="0.75" />
            <stop offset="55%" stopColor="#000" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lava" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe08a" />
            <stop offset="45%" stopColor="#f08a2a" />
            <stop offset="100%" stopColor="#8a1a0c" />
          </linearGradient>
          <linearGradient id="colossus-rim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a0807" />
            <stop offset="100%" stopColor="#120202" />
          </linearGradient>
          <filter id="hot" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1440" height="800" fill="url(#sky)" />
        <rect width="1440" height="800" fill="url(#glow)" />

        {/* distant lightning, flashes briefly every few seconds */}
        <g className="lightning">
          <rect width="1440" height="800" fill="#ffd9b0" opacity="0.12" />
          <path
            d="M560 0 L548 70 L572 74 L540 160 L566 162 L530 260"
            fill="none"
            stroke="#ffe7c4"
            strokeWidth="3"
            filter="url(#hot)"
          />
        </g>

        {/* far ridge */}
        <path
          fill="#4a0d08"
          d="M0 560 L80 500 L130 530 L210 440 L260 490 L340 410 L400 470 L470 380 L530 450 L610 400 L680 460 L760 360 L820 430 L900 390 L980 450 L1060 370 L1130 440 L1210 400 L1290 460 L1360 420 L1440 470 L1440 800 L0 800 Z"
        />

        {/* the colossus: an original horned titan, breathing slowly behind the mountains */}
        <g className="colossus">
          <g fill="url(#colossus-rim)">
            {/* horns */}
            <path d="M1118 296 C1086 274 1054 228 1066 160 C1078 210 1100 248 1134 276 Z" />
            <path d="M1182 296 C1214 274 1246 228 1234 160 C1222 210 1200 248 1166 276 Z" />
            {/* head */}
            <path d="M1112 378 L1104 322 C1104 290 1124 266 1150 266 C1176 266 1196 290 1196 322 L1188 378 Z" />
            {/* shoulders, torso and spikes */}
            <path d="M985 660 L1006 452 C1018 402 1068 382 1110 374 L1190 374 C1232 382 1282 402 1294 452 L1315 660 Z" />
            <path d="M1040 398 L1026 344 L1064 388 Z M1260 398 L1274 344 L1236 388 Z" />
            {/* arms */}
            <path d="M1006 452 C980 504 964 566 970 660 L1004 660 C1004 574 1014 522 1032 482 Z" />
            <path d="M1294 452 C1320 504 1336 566 1330 660 L1296 660 C1296 574 1286 522 1268 482 Z" />
          </g>
          {/* molten veins */}
          <g
            className="veins"
            fill="none"
            stroke="#f08a2a"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#hot)"
          >
            <path d="M1150 392 L1144 430 L1156 462 L1146 500 L1152 540" />
            <path d="M1144 430 L1110 452 L1092 490" />
            <path d="M1156 462 L1194 480 L1210 520" />
            <path d="M1060 420 L1080 450 L1072 486" />
            <path d="M1240 420 L1222 448 L1230 482" />
          </g>
          {/* four eyes */}
          <g className="eyes" fill="#ffd27a" filter="url(#hot)">
            <ellipse cx="1132" cy="314" rx="6" ry="3.2" />
            <ellipse cx="1168" cy="314" rx="6" ry="3.2" />
            <ellipse cx="1139" cy="330" rx="3.4" ry="2" />
            <ellipse cx="1161" cy="330" rx="3.4" ry="2" />
          </g>
        </g>

        {/* spires */}
        <path
          fill="#250605"
          d="M860 540 L875 320 L890 540 Z M905 540 L925 250 L945 540 Z M240 560 L252 380 L264 560 Z M282 560 L298 320 L314 560 Z"
        />
        {/* mid ridge */}
        <path
          fill="#1c0403"
          d="M0 640 L60 590 L120 620 L190 540 L250 600 L330 520 L390 590 L460 560 L540 620 L620 540 L700 600 L790 530 L860 590 L940 550 L1020 610 L1100 520 L1170 590 L1250 560 L1330 620 L1440 570 L1440 800 L0 800 Z"
        />
        {/* lava rift between the ridges */}
        <path
          className="lava"
          fill="url(#lava)"
          filter="url(#hot)"
          d="M560 700 C640 676 720 690 800 672 C880 656 960 680 1040 664 C1120 650 1200 672 1300 660 L1440 668 L1440 700 C1300 704 1200 694 1100 702 C980 712 880 700 780 710 C690 718 620 712 560 700 Z"
        />
        {/* foreground rocks */}
        <path
          fill="#000"
          d="M0 720 L70 680 L110 700 L170 650 L220 700 L300 670 L360 710 L440 660 L520 715 L600 690 L680 730 L760 680 L840 720 L930 670 L1010 715 L1090 690 L1170 730 L1250 680 L1330 715 L1440 690 L1440 800 L0 800 Z"
        />
        {/* darken the left side so the text stays readable, and fade the base into the page */}
        <rect width="1440" height="800" fill="url(#shade)" />
        <rect y="680" width="1440" height="120" fill="url(#fade)" />
      </svg>

      {fliers.map((f, i) => (
        <Flier key={i} {...f} />
      ))}

      {embers.map((e, i) => (
        <span
          key={i}
          className="ember"
          style={
            {
              left: e.left,
              width: e.size,
              height: e.size,
              animationDuration: `${e.duration}s`,
              animationDelay: `${e.delay}s`,
              "--drift": e.drift,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
