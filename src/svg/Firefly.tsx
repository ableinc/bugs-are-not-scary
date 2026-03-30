export default function FireflySvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="firefly-title"
      class="bug-svg"
    >
      <title id="firefly-title">A glowing firefly</title>
      <style>{`
        .firefly-body { animation: firefly-float 2.5s ease-in-out infinite; }
        .firefly-glow { animation: firefly-pulse 1.5s ease-in-out infinite; }
        .firefly-wing-l { animation: ff-wing 0.3s ease-in-out infinite alternate; transform-origin: 95px 82px; }
        .firefly-wing-r { animation: ff-wing 0.3s ease-in-out infinite alternate-reverse; transform-origin: 105px 82px; }
        @keyframes firefly-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes firefly-pulse { 0%, 100% { opacity: 0.4; r: 30; } 50% { opacity: 0.9; r: 40; } }
        @keyframes ff-wing { 0% { transform: rotate(-10deg); } 100% { transform: rotate(10deg); } }
      `}</style>
      <g class="firefly-body">
        {/* Glow effect */}
        <circle class="firefly-glow" cx="100" cy="148" r="35" fill="url(#firefly-glow-grad)" />
        <defs>
          <radialGradient id="firefly-glow-grad">
            <stop offset="0%" stop-color="#ffee58" stop-opacity="0.8" />
            <stop offset="50%" stop-color="#ffb300" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#ffb300" stop-opacity="0" />
          </radialGradient>
        </defs>
        {/* Wings */}
        <ellipse
          class="firefly-wing-l"
          cx="72"
          cy="78"
          rx="24"
          ry="14"
          fill="rgba(200,220,255,0.5)"
          stroke="#b0bec5"
          stroke-width="0.8"
        />
        <ellipse
          class="firefly-wing-r"
          cx="128"
          cy="78"
          rx="24"
          ry="14"
          fill="rgba(200,220,255,0.5)"
          stroke="#b0bec5"
          stroke-width="0.8"
        />
        {/* Abdomen — glowing part */}
        <ellipse cx="100" cy="140" rx="20" ry="24" fill="#ffb300" />
        <ellipse cx="100" cy="140" rx="14" ry="18" fill="#ffee58" opacity="0.8" />
        {/* Thorax */}
        <ellipse cx="100" cy="100" rx="16" ry="18" fill="#4e342e" />
        {/* Head */}
        <circle cx="100" cy="68" r="16" fill="#5d4037" />
        {/* Eyes */}
        <circle cx="92" cy="64" r="5" fill="white" />
        <circle cx="108" cy="64" r="5" fill="white" />
        <circle cx="93" cy="63" r="3" fill="#333" />
        <circle cx="109" cy="63" r="3" fill="#333" />
        <circle cx="94" cy="61" r="1.2" fill="white" />
        <circle cx="110" cy="61" r="1.2" fill="white" />
        {/* Smile */}
        <path
          d="M 94 74 Q 100 80 106 74"
          stroke="white"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
        />
        {/* Antennae */}
        <path
          d="M 92 55 Q 82 35 78 28"
          stroke="#5d4037"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
        />
        <circle cx="78" cy="28" r="2.5" fill="#ffb300" />
        <path
          d="M 108 55 Q 118 35 122 28"
          stroke="#5d4037"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
        />
        <circle cx="122" cy="28" r="2.5" fill="#ffb300" />
        {/* Legs */}
        <path
          d="M 86 108 Q 70 118 62 128"
          stroke="#4e342e"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 114 108 Q 130 118 138 128"
          stroke="#4e342e"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 84 98 Q 65 95 58 100"
          stroke="#4e342e"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 116 98 Q 135 95 142 100"
          stroke="#4e342e"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
}
