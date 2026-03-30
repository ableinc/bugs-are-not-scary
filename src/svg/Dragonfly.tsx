export default function DragonflySvg() {
  return (
    <svg
      viewBox="0 0 220 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="dragonfly-title"
      class="bug-svg"
    >
      <title id="dragonfly-title">A speedy dragonfly</title>
      <style>{`
        @keyframes df-hover { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes df-wing { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(0.6)} }
        .df-g { animation: df-hover 2.5s ease-in-out infinite; }
        .df-wing { animation: df-wing 0.12s ease-in-out infinite; transform-origin: 110px 80px; }
        .df-wing--d { animation-delay: 0.06s; }
      `}</style>
      <g class="df-g">
        {/* Upper wings */}
        <ellipse
          class="df-wing"
          cx="65"
          cy="62"
          rx="45"
          ry="14"
          fill="#e1f5fe"
          stroke="#4fc3f7"
          stroke-width="1"
          opacity="0.7"
          transform="rotate(-10 65 62)"
        />
        <ellipse
          class="df-wing"
          cx="155"
          cy="62"
          rx="45"
          ry="14"
          fill="#e1f5fe"
          stroke="#4fc3f7"
          stroke-width="1"
          opacity="0.7"
          transform="rotate(10 155 62)"
        />
        {/* Lower wings */}
        <ellipse
          class="df-wing df-wing--d"
          cx="70"
          cy="88"
          rx="38"
          ry="11"
          fill="#e1f5fe"
          stroke="#4fc3f7"
          stroke-width="1"
          opacity="0.6"
          transform="rotate(8 70 88)"
        />
        <ellipse
          class="df-wing df-wing--d"
          cx="150"
          cy="88"
          rx="38"
          ry="11"
          fill="#e1f5fe"
          stroke="#4fc3f7"
          stroke-width="1"
          opacity="0.6"
          transform="rotate(-8 150 88)"
        />
        {/* Tail segments */}
        <ellipse cx="110" cy="108" rx="8" ry="6" fill="#0288d1" />
        <ellipse cx="110" cy="122" rx="7" ry="5.5" fill="#0277bd" />
        <ellipse cx="110" cy="135" rx="6" ry="5" fill="#01579b" />
        <ellipse cx="110" cy="147" rx="5" ry="4.5" fill="#014a80" />
        <ellipse cx="110" cy="158" rx="4" ry="4" fill="#013a64" />
        {/* Thorax */}
        <ellipse cx="110" cy="82" rx="14" ry="18" fill="#0288d1" />
        {/* Head */}
        <circle cx="110" cy="52" r="20" fill="#0288d1" />
        {/* Big compound eyes */}
        <circle cx="96" cy="47" r="12" fill="#b3e5fc" />
        <circle cx="124" cy="47" r="12" fill="#b3e5fc" />
        <circle cx="96" cy="47" r="12" fill="none" stroke="#0277bd" stroke-width="1" />
        <circle cx="124" cy="47" r="12" fill="none" stroke="#0277bd" stroke-width="1" />
        <circle cx="98" cy="45" r="5" fill="white" />
        <circle cx="126" cy="45" r="5" fill="white" />
        <circle cx="99" cy="44" r="2.5" fill="#01579b" />
        <circle cx="127" cy="44" r="2.5" fill="#01579b" />
        {/* Smile */}
        <path
          d="M103 60 Q110 66 117 60"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        {/* Legs */}
        <line
          x1="98"
          y1="82"
          x2="78"
          y2="102"
          stroke="#01579b"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="98"
          y1="90"
          x2="78"
          y2="112"
          stroke="#01579b"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="122"
          y1="82"
          x2="142"
          y2="102"
          stroke="#01579b"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="122"
          y1="90"
          x2="142"
          y2="112"
          stroke="#01579b"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
}
