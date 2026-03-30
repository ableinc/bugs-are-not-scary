export default function GrasshopperSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="grasshopper-title"
      class="bug-svg"
    >
      <title id="grasshopper-title">A jumping grasshopper</title>
      <style>{`
        .grasshopper-body { animation: gh-jump 2.5s ease-in-out infinite; }
        .gh-back-leg { animation: gh-leg-kick 2.5s ease-in-out infinite; transform-origin: 130px 110px; }
        @keyframes gh-jump { 0%, 100% { transform: translateY(0); } 40% { transform: translateY(-10px); } 60% { transform: translateY(-10px); } }
        @keyframes gh-leg-kick { 0%, 100% { transform: rotate(0); } 40% { transform: rotate(-15deg); } 60% { transform: rotate(-15deg); } }
      `}</style>
      <g class="grasshopper-body">
        <ellipse cx="100" cy="178" rx="50" ry="5" fill="rgba(0,0,0,0.07)" />
        {/* Abdomen */}
        <ellipse cx="140" cy="105" rx="30" ry="18" fill="#689f38" />
        <ellipse cx="155" cy="105" rx="16" ry="12" fill="#7cb342" />
        {/* Thorax */}
        <ellipse cx="100" cy="100" rx="22" ry="16" fill="#558b2f" />
        {/* Head */}
        <ellipse cx="65" cy="85" rx="22" ry="20" fill="#689f38" />
        {/* Eyes */}
        <circle cx="55" cy="78" r="8" fill="white" />
        <circle cx="73" cy="78" r="8" fill="white" />
        <circle cx="57" cy="77" r="4.5" fill="#333" />
        <circle cx="75" cy="77" r="4.5" fill="#333" />
        <circle cx="58" cy="75" r="1.8" fill="white" />
        <circle cx="76" cy="75" r="1.8" fill="white" />
        {/* Smile */}
        <path
          d="M 58 93 Q 65 100 72 93"
          stroke="white"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
        />
        {/* Antenna */}
        <path
          d="M 58 68 Q 35 38 28 25"
          stroke="#558b2f"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 70 68 Q 65 32 72 18"
          stroke="#558b2f"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
        />
        {/* Front legs */}
        <path
          d="M 82 108 Q 72 125 65 140"
          stroke="#33691e"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 92 112 Q 85 130 80 145"
          stroke="#33691e"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
        {/* Big back legs */}
        <g class="gh-back-leg">
          <path
            d="M 130 108 Q 150 80 165 70"
            stroke="#33691e"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 165 70 Q 175 100 178 150"
            stroke="#33691e"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
          />
        </g>
        <g class="gh-back-leg" style="animation-delay: 0.1s">
          <path
            d="M 125 112 Q 140 85 155 78"
            stroke="#33691e"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 155 78 Q 162 105 165 150"
            stroke="#33691e"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
        </g>
        {/* Wing hint */}
        <ellipse
          cx="120"
          cy="95"
          rx="22"
          ry="10"
          fill="#7cb342"
          opacity="0.4"
          transform="rotate(-5 120 95)"
        />
      </g>
    </svg>
  );
}
