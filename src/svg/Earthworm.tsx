export default function EarthwormSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="earthworm-title"
      class="bug-svg"
    >
      <title id="earthworm-title">A wiggly earthworm</title>
      <style>{`
        .worm-body { animation: worm-wiggle 2s ease-in-out infinite; }
        @keyframes worm-wiggle { 
          0%, 100% { transform: translateX(0); } 
          25% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
      `}</style>
      <g class="worm-body">
        {/* Body — S-curve */}
        <path
          d="M 45 80 Q 75 50 100 80 Q 125 110 150 80 Q 170 58 165 90 Q 160 125 135 130 Q 110 135 95 150 Q 80 165 65 155"
          stroke="#8d6e63"
          stroke-width="22"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        {/* Lighter belly */}
        <path
          d="M 45 80 Q 75 50 100 80 Q 125 110 150 80 Q 170 58 165 90 Q 160 125 135 130 Q 110 135 95 150 Q 80 165 65 155"
          stroke="#a1887f"
          stroke-width="14"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        {/* Segment lines */}
        <line x1="55" y1="70" x2="58" y2="82" stroke="#795548" stroke-width="1.2" opacity="0.5" />
        <line x1="70" y1="62" x2="72" y2="74" stroke="#795548" stroke-width="1.2" opacity="0.5" />
        <line x1="87" y1="68" x2="88" y2="80" stroke="#795548" stroke-width="1.2" opacity="0.5" />
        <line x1="105" y1="82" x2="107" y2="94" stroke="#795548" stroke-width="1.2" opacity="0.5" />
        <line x1="125" y1="92" x2="128" y2="80" stroke="#795548" stroke-width="1.2" opacity="0.5" />
        <line x1="145" y1="75" x2="148" y2="86" stroke="#795548" stroke-width="1.2" opacity="0.5" />
        <line x1="160" y1="82" x2="158" y2="95" stroke="#795548" stroke-width="1.2" opacity="0.5" />
        <line
          x1="152"
          y1="110"
          x2="148"
          y2="120"
          stroke="#795548"
          stroke-width="1.2"
          opacity="0.5"
        />
        <line
          x1="130"
          y1="125"
          x2="125"
          y2="135"
          stroke="#795548"
          stroke-width="1.2"
          opacity="0.5"
        />
        <line
          x1="108"
          y1="138"
          x2="102"
          y2="148"
          stroke="#795548"
          stroke-width="1.2"
          opacity="0.5"
        />
        {/* Band (clitellum) */}
        <path
          d="M 88 67 Q 92 60 100 68"
          stroke="#bcaaa4"
          stroke-width="22"
          fill="none"
          stroke-linecap="round"
          opacity="0.5"
        />
        {/* Head */}
        <circle cx="42" cy="82" r="14" fill="#8d6e63" />
        <circle cx="42" cy="82" r="10" fill="#a1887f" />
        {/* Eyes */}
        <circle cx="36" cy="78" r="4.5" fill="white" />
        <circle cx="48" cy="78" r="4.5" fill="white" />
        <circle cx="37" cy="77" r="2.5" fill="#333" />
        <circle cx="49" cy="77" r="2.5" fill="#333" />
        <circle cx="38" cy="76" r="1" fill="white" />
        <circle cx="50" cy="76" r="1" fill="white" />
        {/* Smile */}
        <path
          d="M 36 87 Q 42 93 48 87"
          stroke="#5d4037"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
        />
        {/* Cheeks */}
        <circle cx="32" cy="85" r="3" fill="#d7ccc8" opacity="0.5" />
        <circle cx="52" cy="85" r="3" fill="#d7ccc8" opacity="0.5" />
      </g>
    </svg>
  );
}
