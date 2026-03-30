export default function MosquitoSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="mosquito-title"
      class="bug-svg"
    >
      <title id="mosquito-title">A tiny buzzing mosquito</title>
      <style>{`
        @keyframes mosquito-hover { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-6px) rotate(2deg)} }
        @keyframes wing-buzz { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(0.88)} }
        .mosquito-g { animation: mosquito-hover 1.2s ease-in-out infinite; }
        .mosquito-wing-l { animation: wing-buzz 0.18s linear infinite; transform-origin: 97px 98px; }
        .mosquito-wing-r { animation: wing-buzz 0.18s linear infinite 0.09s; transform-origin: 103px 98px; }
      `}</style>
      <g class="mosquito-g">
        {/* Left wing */}
        <g class="mosquito-wing-l">
          <ellipse
            cx="75"
            cy="92"
            rx="28"
            ry="12"
            fill="#b0bec5"
            opacity="0.55"
            transform="rotate(-20 75 92)"
          />
        </g>
        {/* Right wing */}
        <g class="mosquito-wing-r">
          <ellipse
            cx="125"
            cy="92"
            rx="28"
            ry="12"
            fill="#b0bec5"
            opacity="0.55"
            transform="rotate(20 125 92)"
          />
        </g>
        {/* Abdomen — slim, segmented */}
        <ellipse cx="100" cy="148" rx="10" ry="28" fill="#546e7a" />
        <line
          x1="90"
          y1="132"
          x2="110"
          y2="132"
          stroke="#37474f"
          stroke-width="1.2"
          opacity="0.6"
        />
        <line
          x1="90"
          y1="142"
          x2="110"
          y2="142"
          stroke="#37474f"
          stroke-width="1.2"
          opacity="0.6"
        />
        <line
          x1="90"
          y1="152"
          x2="110"
          y2="152"
          stroke="#37474f"
          stroke-width="1.2"
          opacity="0.6"
        />
        <line
          x1="90"
          y1="162"
          x2="110"
          y2="162"
          stroke="#37474f"
          stroke-width="1.2"
          opacity="0.6"
        />
        {/* Thorax */}
        <ellipse cx="100" cy="108" rx="14" ry="12" fill="#607d8b" />
        {/* Head */}
        <circle cx="100" cy="80" r="17" fill="#546e7a" />
        {/* Eyes */}
        <circle cx="90" cy="76" r="6.5" fill="white" />
        <circle cx="110" cy="76" r="6.5" fill="white" />
        <circle cx="91.5" cy="75" r="3.2" fill="#1a1a1a" />
        <circle cx="111.5" cy="75" r="3.2" fill="#1a1a1a" />
        <circle cx="92.5" cy="74" r="1.2" fill="white" />
        <circle cx="112.5" cy="74" r="1.2" fill="white" />
        {/* Smile */}
        <path
          d="M93 87 Q100 93 107 87"
          fill="none"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        {/* Proboscis (needle) */}
        <path
          d="M100 94 Q100 108 100 130"
          fill="none"
          stroke="#37474f"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M100 130 Q102 145 105 160"
          fill="none"
          stroke="#37474f"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        {/* Antennae — feathery */}
        <path
          d="M92 66 Q82 52 75 42"
          fill="none"
          stroke="#37474f"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="87"
          y1="57"
          x2="80"
          y2="54"
          stroke="#37474f"
          stroke-width="1.2"
          stroke-linecap="round"
        />
        <line
          x1="84"
          y1="52"
          x2="77"
          y2="49"
          stroke="#37474f"
          stroke-width="1.2"
          stroke-linecap="round"
        />
        <line
          x1="81"
          y1="47"
          x2="74"
          y2="44"
          stroke="#37474f"
          stroke-width="1.2"
          stroke-linecap="round"
        />
        <path
          d="M108 66 Q118 52 125 42"
          fill="none"
          stroke="#37474f"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="113"
          y1="57"
          x2="120"
          y2="54"
          stroke="#37474f"
          stroke-width="1.2"
          stroke-linecap="round"
        />
        <line
          x1="116"
          y1="52"
          x2="123"
          y2="49"
          stroke="#37474f"
          stroke-width="1.2"
          stroke-linecap="round"
        />
        <line
          x1="119"
          y1="47"
          x2="126"
          y2="44"
          stroke="#37474f"
          stroke-width="1.2"
          stroke-linecap="round"
        />
        {/* Legs — long and spindly */}
        <line
          x1="88"
          y1="108"
          x2="56"
          y2="100"
          stroke="#37474f"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="56"
          y1="100"
          x2="38"
          y2="112"
          stroke="#37474f"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="88"
          y1="115"
          x2="54"
          y2="120"
          stroke="#37474f"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="54"
          y1="120"
          x2="36"
          y2="138"
          stroke="#37474f"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="90"
          y1="122"
          x2="58"
          y2="138"
          stroke="#37474f"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="58"
          y1="138"
          x2="44"
          y2="158"
          stroke="#37474f"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="112"
          y1="108"
          x2="144"
          y2="100"
          stroke="#37474f"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="144"
          y1="100"
          x2="162"
          y2="112"
          stroke="#37474f"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="112"
          y1="115"
          x2="146"
          y2="120"
          stroke="#37474f"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="146"
          y1="120"
          x2="164"
          y2="138"
          stroke="#37474f"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="110"
          y1="122"
          x2="142"
          y2="138"
          stroke="#37474f"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="142"
          y1="138"
          x2="156"
          y2="158"
          stroke="#37474f"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        {/* Cheeks */}
        <circle cx="85" cy="80" r="4" fill="#78909c" opacity="0.4" />
        <circle cx="115" cy="80" r="4" fill="#78909c" opacity="0.4" />
        {/* Buzz text */}
        <text x="148" y="72" font-size="11" opacity="0.6" fill="#607d8b">
          bzz
        </text>
      </g>
    </svg>
  );
}
