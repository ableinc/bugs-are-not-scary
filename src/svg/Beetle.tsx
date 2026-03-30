export default function BeetleSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="beetle-title"
      class="bug-svg"
    >
      <title id="beetle-title">A shiny beetle</title>
      <style>{`
        .beetle-body { animation: beetle-walk 2s ease-in-out infinite; }
        .beetle-shine { animation: beetle-shimmer 3s ease-in-out infinite; }
        @keyframes beetle-walk { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(3px); } }
        @keyframes beetle-shimmer { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
      `}</style>
      <g class="beetle-body">
        <ellipse cx="100" cy="175" rx="40" ry="6" fill="rgba(0,0,0,0.08)" />
        {/* Shell */}
        <ellipse cx="100" cy="115" rx="45" ry="42" fill="#2e7d32" />
        {/* Shell shine */}
        <ellipse
          class="beetle-shine"
          cx="85"
          cy="100"
          rx="18"
          ry="20"
          fill="#4caf50"
          opacity="0.4"
        />
        {/* Wing line */}
        <line x1="100" y1="73" x2="100" y2="157" stroke="#1b5e20" stroke-width="2" />
        {/* Shell edge details */}
        <ellipse
          cx="100"
          cy="115"
          rx="45"
          ry="42"
          fill="none"
          stroke="#1b5e20"
          stroke-width="1.5"
        />
        {/* Head */}
        <circle cx="100" cy="70" r="18" fill="#33691e" />
        {/* Eyes */}
        <circle cx="90" cy="66" r="6" fill="white" />
        <circle cx="110" cy="66" r="6" fill="white" />
        <circle cx="92" cy="65" r="3.5" fill="#333" />
        <circle cx="112" cy="65" r="3.5" fill="#333" />
        <circle cx="93" cy="63" r="1.5" fill="white" />
        <circle cx="113" cy="63" r="1.5" fill="white" />
        {/* Smile */}
        <path
          d="M 93 76 Q 100 82 107 76"
          stroke="white"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
        />
        {/* Antennae */}
        <path
          d="M 88 55 Q 75 35 68 28"
          stroke="#33691e"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 68 28 L 62 22"
          stroke="#33691e"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 68 28 L 72 20"
          stroke="#33691e"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 112 55 Q 125 35 132 28"
          stroke="#33691e"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 132 28 L 138 22"
          stroke="#33691e"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 132 28 L 128 20"
          stroke="#33691e"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
        {/* Legs */}
        <path
          d="M 60 100 Q 42 90 32 82"
          stroke="#1b5e20"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 140 100 Q 158 90 168 82"
          stroke="#1b5e20"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 57 120 Q 38 120 28 118"
          stroke="#1b5e20"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 143 120 Q 162 120 172 118"
          stroke="#1b5e20"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 62 140 Q 45 148 35 155"
          stroke="#1b5e20"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 138 140 Q 155 148 165 155"
          stroke="#1b5e20"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
}
