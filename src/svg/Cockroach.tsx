export default function CockroachSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="cockroach-title"
      class="bug-svg"
    >
      <title id="cockroach-title">A tough little cockroach</title>
      <style>{`
        @keyframes cockroach-scurry { 0%,100%{transform:translateX(0) rotate(0deg)} 25%{transform:translateX(2px) rotate(1deg)} 75%{transform:translateX(-2px) rotate(-1deg)} }
        @keyframes antenna-wave { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(10deg)} }
        .cockroach-g { animation: cockroach-scurry 1.5s ease-in-out infinite; }
        .antenna-l { animation: antenna-wave 1s ease-in-out infinite; transform-origin: 88px 58px; }
        .antenna-r { animation: antenna-wave 1s ease-in-out infinite 0.5s; transform-origin: 112px 58px; }
      `}</style>
      <g class="cockroach-g">
        {/* Abdomen */}
        <ellipse cx="100" cy="150" rx="26" ry="30" fill="#4e342e" />
        <ellipse
          cx="100"
          cy="150"
          rx="26"
          ry="30"
          fill="none"
          stroke="#3e2723"
          stroke-width="1.5"
        />
        {/* abdomen segments */}
        <line
          x1="75"
          y1="135"
          x2="125"
          y2="135"
          stroke="#3e2723"
          stroke-width="1.2"
          opacity="0.55"
        />
        <line
          x1="74"
          y1="145"
          x2="126"
          y2="145"
          stroke="#3e2723"
          stroke-width="1.2"
          opacity="0.55"
        />
        <line
          x1="74"
          y1="155"
          x2="126"
          y2="155"
          stroke="#3e2723"
          stroke-width="1.2"
          opacity="0.55"
        />
        <line
          x1="76"
          y1="165"
          x2="124"
          y2="165"
          stroke="#3e2723"
          stroke-width="1.2"
          opacity="0.55"
        />
        {/* Wing covers (elytra) */}
        <ellipse cx="93" cy="120" rx="18" ry="26" fill="#5d4037" transform="rotate(-5 93 120)" />
        <ellipse cx="107" cy="120" rx="18" ry="26" fill="#4e342e" transform="rotate(5 107 120)" />
        {/* center line on wings */}
        <line
          x1="100"
          y1="96"
          x2="100"
          y2="143"
          stroke="#3e2723"
          stroke-width="1.5"
          opacity="0.6"
        />
        {/* Thorax (pronotum — wide shield) */}
        <ellipse cx="100" cy="96" rx="24" ry="14" fill="#6d4c41" />
        <ellipse cx="100" cy="96" rx="24" ry="14" fill="none" stroke="#4e342e" stroke-width="1.2" />
        {/* Head */}
        <ellipse cx="100" cy="72" rx="19" ry="17" fill="#5d4037" />
        {/* Eyes */}
        <circle cx="87" cy="67" r="7" fill="white" />
        <circle cx="113" cy="67" r="7" fill="white" />
        <circle cx="88.5" cy="66" r="3.5" fill="#1a1a1a" />
        <circle cx="114.5" cy="66" r="3.5" fill="#1a1a1a" />
        <circle cx="89.5" cy="65" r="1.3" fill="white" />
        <circle cx="115.5" cy="65" r="1.3" fill="white" />
        {/* Smile */}
        <path
          d="M91 80 Q100 87 109 80"
          fill="none"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        {/* Antennae — long */}
        <g class="antenna-l">
          <path
            d="M88 58 Q72 38 58 20"
            fill="none"
            stroke="#3e2723"
            stroke-width="2.2"
            stroke-linecap="round"
          />
          <circle cx="57" cy="19" r="2.5" fill="#5d4037" />
        </g>
        <g class="antenna-r">
          <path
            d="M112 58 Q128 38 142 20"
            fill="none"
            stroke="#3e2723"
            stroke-width="2.2"
            stroke-linecap="round"
          />
          <circle cx="143" cy="19" r="2.5" fill="#5d4037" />
        </g>
        {/* Front legs */}
        <line
          x1="79"
          y1="92"
          x2="52"
          y2="82"
          stroke="#3e2723"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        <line
          x1="52"
          y1="82"
          x2="36"
          y2="90"
          stroke="#3e2723"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        <line
          x1="121"
          y1="92"
          x2="148"
          y2="82"
          stroke="#3e2723"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        <line
          x1="148"
          y1="82"
          x2="164"
          y2="90"
          stroke="#3e2723"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        {/* Middle legs */}
        <line
          x1="77"
          y1="108"
          x2="48"
          y2="112"
          stroke="#3e2723"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        <line
          x1="48"
          y1="112"
          x2="32"
          y2="128"
          stroke="#3e2723"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        <line
          x1="123"
          y1="108"
          x2="152"
          y2="112"
          stroke="#3e2723"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        <line
          x1="152"
          y1="112"
          x2="168"
          y2="128"
          stroke="#3e2723"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        {/* Hind legs */}
        <line
          x1="76"
          y1="140"
          x2="50"
          y2="148"
          stroke="#3e2723"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        <line
          x1="50"
          y1="148"
          x2="34"
          y2="168"
          stroke="#3e2723"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        <line
          x1="124"
          y1="140"
          x2="150"
          y2="148"
          stroke="#3e2723"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        <line
          x1="150"
          y1="148"
          x2="166"
          y2="168"
          stroke="#3e2723"
          stroke-width="2.2"
          stroke-linecap="round"
        />
        {/* Cheeks */}
        <circle cx="84" cy="72" r="4.5" fill="#8d6e63" opacity="0.4" />
        <circle cx="116" cy="72" r="4.5" fill="#8d6e63" opacity="0.4" />
      </g>
    </svg>
  );
}
