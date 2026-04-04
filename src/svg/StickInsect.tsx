export default function StickInsectSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="stick-insect-title"
      class="bug-svg"
    >
      <title id="stick-insect-title">A camouflaged stick insect</title>
      <style>{`
        @keyframes stick-sway { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(3.5deg)} }
        .stick-g { animation: stick-sway 3.5s ease-in-out infinite; transform-origin: 100px 125px; }
      `}</style>
      <g class="stick-g">
        {/* Abdomen – very long and thin */}
        <rect x="94" y="92" width="12" height="92" rx="6" fill="#795548" />
        <rect
          x="94"
          y="92"
          width="12"
          height="92"
          rx="6"
          fill="none"
          stroke="#5d4037"
          stroke-width="1.5"
        />
        {/* Abdomen segment lines */}
        <line x1="94" y1="111" x2="106" y2="111" stroke="#5d4037" stroke-width="1" opacity="0.6" />
        <line x1="94" y1="128" x2="106" y2="128" stroke="#5d4037" stroke-width="1" opacity="0.6" />
        <line x1="94" y1="145" x2="106" y2="145" stroke="#5d4037" stroke-width="1" opacity="0.6" />
        <line x1="94" y1="162" x2="106" y2="162" stroke="#5d4037" stroke-width="1" opacity="0.6" />

        {/* Thorax */}
        <rect x="93" y="69" width="14" height="30" rx="7" fill="#8d6e63" />
        <rect
          x="93"
          y="69"
          width="14"
          height="30"
          rx="7"
          fill="none"
          stroke="#5d4037"
          stroke-width="1.2"
        />

        {/* Head */}
        <ellipse cx="100" cy="60" rx="13" ry="11" fill="#795548" />
        <ellipse cx="100" cy="60" rx="13" ry="11" fill="none" stroke="#5d4037" stroke-width="1.5" />

        {/* Eyes */}
        <circle cx="93" cy="56" r="5" fill="white" />
        <circle cx="107" cy="56" r="5" fill="white" />
        <circle cx="94" cy="56" r="2.8" fill="#2d2d2d" />
        <circle cx="108" cy="56" r="2.8" fill="#2d2d2d" />
        <circle cx="94.5" cy="55" r="1.1" fill="white" />
        <circle cx="108.5" cy="55" r="1.1" fill="white" />

        {/* Smile */}
        <path
          d="M94 67 Q100 72 106 67"
          fill="none"
          stroke="#5d4037"
          stroke-width="1.8"
          stroke-linecap="round"
        />

        {/* Very long antennae */}
        <path
          d="M93 51 Q74 30 62 18"
          fill="none"
          stroke="#5d4037"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <circle cx="61" cy="17" r="2" fill="#5d4037" />
        <path
          d="M107 51 Q126 30 138 18"
          fill="none"
          stroke="#5d4037"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <circle cx="139" cy="17" r="2" fill="#5d4037" />

        {/* Legs – very long and spindly, 3 pairs */}
        {/* Front pair */}
        <path
          d="M95 79 Q70 88 50 80"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M50 80 Q37 88 28 101"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M105 79 Q130 88 150 80"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M150 80 Q163 88 172 101"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />

        {/* Middle pair */}
        <path
          d="M95 99 Q67 111 46 107"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M46 107 Q33 118 25 133"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M105 99 Q133 111 154 107"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M154 107 Q167 118 175 133"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />

        {/* Hind pair */}
        <path
          d="M95 124 Q66 140 46 138"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M46 138 Q33 151 27 167"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M105 124 Q134 140 154 138"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M154 138 Q167 151 173 167"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />

        {/* Cheeks */}
        <circle cx="90" cy="62" r="3" fill="#a1887f" opacity="0.45" />
        <circle cx="110" cy="62" r="3" fill="#a1887f" opacity="0.45" />
      </g>
    </svg>
  );
}
