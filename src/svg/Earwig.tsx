export default function EarwigSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="earwig-title"
      class="bug-svg"
    >
      <title id="earwig-title">An earwig with little pincers</title>
      <style>{`
        @keyframes earwig-walk { 0%,100%{transform:translateX(0)} 50%{transform:translateX(2px)} }
        @keyframes pincer-snap { 0%,100%{transform:rotate(0)} 50%{transform:rotate(4deg)} }
        .earwig-g { animation: earwig-walk 2s ease-in-out infinite; }
        .earwig-pincer-l { animation: pincer-snap 1.5s ease-in-out infinite; transform-origin: 92px 175px; }
        .earwig-pincer-r { animation: pincer-snap 1.5s ease-in-out infinite 0.3s; transform-origin: 108px 175px; }
      `}</style>
      <g class="earwig-g">
        {/* Pincers (cerci) */}
        <path
          class="earwig-pincer-l"
          d="M92 172 Q78 190 82 198 Q88 196 92 185"
          fill="none"
          stroke="#5d4037"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path
          class="earwig-pincer-r"
          d="M108 172 Q122 190 118 198 Q112 196 108 185"
          fill="none"
          stroke="#5d4037"
          stroke-width="3"
          stroke-linecap="round"
        />
        {/* Abdomen segments */}
        <ellipse cx="100" cy="162" rx="14" ry="10" fill="#795548" />
        <ellipse cx="100" cy="148" rx="15" ry="10" fill="#6d4c41" />
        <ellipse cx="100" cy="134" rx="15" ry="10" fill="#795548" />
        <ellipse cx="100" cy="120" rx="14" ry="10" fill="#6d4c41" />
        {/* Segment lines */}
        <path d="M86 155 Q100 152 114 155" fill="none" stroke="#4e342e" stroke-width="1" />
        <path d="M86 141 Q100 138 114 141" fill="none" stroke="#4e342e" stroke-width="1" />
        <path d="M86 127 Q100 124 114 127" fill="none" stroke="#4e342e" stroke-width="1" />
        {/* Thorax */}
        <ellipse cx="100" cy="100" rx="16" ry="14" fill="#795548" />
        {/* Head */}
        <ellipse cx="100" cy="72" rx="18" ry="16" fill="#6d4c41" />
        {/* Eyes */}
        <circle cx="90" cy="68" r="6" fill="white" />
        <circle cx="110" cy="68" r="6" fill="white" />
        <circle cx="91" cy="67" r="3" fill="#2d2d2d" />
        <circle cx="111" cy="67" r="3" fill="#2d2d2d" />
        <circle cx="92" cy="66" r="1.2" fill="white" />
        <circle cx="112" cy="66" r="1.2" fill="white" />
        {/* Smile */}
        <path
          d="M94 78 Q100 83 106 78"
          fill="none"
          stroke="#d7ccc8"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        {/* Antennae */}
        <path
          d="M88 58 Q78 35 68 22"
          fill="none"
          stroke="#4e342e"
          stroke-width="2"
          stroke-linecap="round"
        />
        <circle cx="67" cy="20" r="2.5" fill="#6d4c41" />
        <path
          d="M112 58 Q122 35 132 22"
          fill="none"
          stroke="#4e342e"
          stroke-width="2"
          stroke-linecap="round"
        />
        <circle cx="133" cy="20" r="2.5" fill="#6d4c41" />
        {/* Legs */}
        <line
          x1="86"
          y1="96"
          x2="60"
          y2="108"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="60"
          y1="108"
          x2="52"
          y2="125"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="114"
          y1="96"
          x2="140"
          y2="108"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="140"
          y1="108"
          x2="148"
          y2="125"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="87"
          y1="108"
          x2="60"
          y2="125"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="60"
          y1="125"
          x2="52"
          y2="142"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="113"
          y1="108"
          x2="140"
          y2="125"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="140"
          y1="125"
          x2="148"
          y2="142"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="88"
          y1="122"
          x2="62"
          y2="142"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="62"
          y1="142"
          x2="55"
          y2="158"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="112"
          y1="122"
          x2="138"
          y2="142"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="138"
          y1="142"
          x2="145"
          y2="158"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        {/* Cheeks */}
        <circle cx="84" cy="72" r="3" fill="#8d6e63" opacity="0.4" />
        <circle cx="116" cy="72" r="3" fill="#8d6e63" opacity="0.4" />
      </g>
    </svg>
  );
}
