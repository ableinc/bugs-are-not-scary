export default function WaspSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="wasp-title"
      class="bug-svg"
    >
      <title id="wasp-title">A buzzy striped wasp</title>
      <style>{`
        @keyframes wasp-hover { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes wasp-wing-flap { 0%,100%{opacity:1;transform:scaleX(1)} 50%{opacity:0.75;transform:scaleX(0.9)} }
        .wasp-body { animation: wasp-hover 1.4s ease-in-out infinite; }
        .wasp-wing { animation: wasp-wing-flap 0.13s linear infinite; transform-origin: 100px 92px; }
      `}</style>
      <g class="wasp-body">
        {/* Wings – front pair */}
        <ellipse
          cx="65"
          cy="87"
          rx="36"
          ry="11"
          fill="rgba(210,240,255,0.65)"
          stroke="#90caf9"
          stroke-width="1"
          transform="rotate(-20, 65, 87)"
          class="wasp-wing"
        />
        <ellipse
          cx="135"
          cy="87"
          rx="36"
          ry="11"
          fill="rgba(210,240,255,0.65)"
          stroke="#90caf9"
          stroke-width="1"
          transform="rotate(20, 135, 87)"
          class="wasp-wing"
        />
        {/* Wings – hind pair */}
        <ellipse
          cx="70"
          cy="100"
          rx="26"
          ry="9"
          fill="rgba(210,240,255,0.50)"
          stroke="#90caf9"
          stroke-width="1"
          transform="rotate(-14, 70, 100)"
          class="wasp-wing"
        />
        <ellipse
          cx="130"
          cy="100"
          rx="26"
          ry="9"
          fill="rgba(210,240,255,0.50)"
          stroke="#90caf9"
          stroke-width="1"
          transform="rotate(14, 130, 100)"
          class="wasp-wing"
        />

        {/* Abdomen base */}
        <ellipse cx="100" cy="143" rx="21" ry="31" fill="#fdd835" />
        {/* Black stripes (ellipses sized to stay inside the abdomen outline) */}
        <ellipse cx="100" cy="124" rx="16" ry="4" fill="#212121" opacity="0.82" />
        <ellipse cx="100" cy="137" rx="20" ry="4" fill="#212121" opacity="0.82" />
        <ellipse cx="100" cy="151" rx="19" ry="4" fill="#212121" opacity="0.82" />
        <ellipse cx="100" cy="163" rx="15" ry="4" fill="#212121" opacity="0.82" />
        {/* Abdomen outline */}
        <ellipse
          cx="100"
          cy="143"
          rx="21"
          ry="31"
          fill="none"
          stroke="#f57f17"
          stroke-width="1.5"
        />

        {/* Petiole */}
        <ellipse cx="100" cy="111" rx="5" ry="9" fill="#5d4037" />

        {/* Thorax */}
        <ellipse cx="100" cy="93" rx="15" ry="14" fill="#fbc02d" />
        <ellipse cx="100" cy="93" rx="15" ry="14" fill="none" stroke="#f57f17" stroke-width="1" />

        {/* Head */}
        <circle cx="100" cy="66" r="22" fill="#fdd835" />
        <circle cx="100" cy="66" r="22" fill="none" stroke="#f57f17" stroke-width="1.5" />

        {/* Eyes */}
        <ellipse cx="88" cy="62" rx="7" ry="8" fill="#1a1a1a" />
        <ellipse cx="112" cy="62" rx="7" ry="8" fill="#1a1a1a" />
        <circle cx="86" cy="60" r="2.5" fill="white" />
        <circle cx="110" cy="60" r="2.5" fill="white" />

        {/* Smile */}
        <path
          d="M93 77 Q100 84 107 77"
          fill="none"
          stroke="#e65100"
          stroke-width="2.5"
          stroke-linecap="round"
        />

        {/* Cheeks */}
        <circle cx="83" cy="68" r="5" fill="#ffb300" opacity="0.42" />
        <circle cx="117" cy="68" r="5" fill="#ffb300" opacity="0.42" />

        {/* Antennae */}
        <path
          d="M90 46 Q80 27 72 19"
          fill="none"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <circle cx="71" cy="18" r="3.5" fill="#5d4037" />
        <path
          d="M110 46 Q120 27 128 19"
          fill="none"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <circle cx="129" cy="18" r="3.5" fill="#5d4037" />

        {/* Legs – 3 pairs from thorax */}
        <line
          x1="87"
          y1="96"
          x2="62"
          y2="111"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="62"
          y1="111"
          x2="55"
          y2="127"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="113"
          y1="96"
          x2="138"
          y2="111"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="138"
          y1="111"
          x2="145"
          y2="127"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />

        <line
          x1="85"
          y1="104"
          x2="57"
          y2="122"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="57"
          y1="122"
          x2="49"
          y2="140"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="115"
          y1="104"
          x2="143"
          y2="122"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="143"
          y1="122"
          x2="151"
          y2="140"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />

        <line
          x1="87"
          y1="130"
          x2="62"
          y2="148"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="62"
          y1="148"
          x2="56"
          y2="164"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="113"
          y1="130"
          x2="138"
          y2="148"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="138"
          y1="148"
          x2="144"
          y2="164"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />

        {/* Stinger */}
        <path
          d="M100 173 Q98 181 100 187"
          fill="none"
          stroke="#5d4037"
          stroke-width="3"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
}
