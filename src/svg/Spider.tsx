export default function SpiderSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="spider-title"
      class="bug-svg"
    >
      <title id="spider-title">A clever friendly spider</title>
      <style>{`
        .spider-body { animation: spider-dangle 3s ease-in-out infinite; }
        .spider-leg-l { animation: spider-legs 2s ease-in-out infinite; }
        .spider-leg-r { animation: spider-legs 2s ease-in-out 0.5s infinite; }
        @keyframes spider-dangle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(5px); } }
        @keyframes spider-legs { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(3deg); } }
      `}</style>
      <g class="spider-body">
        {/* Web thread */}
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="50"
          stroke="#bbb"
          stroke-width="1.5"
          stroke-dasharray="4 3"
        />
        {/* Abdomen */}
        <ellipse cx="100" cy="120" rx="32" ry="28" fill="#546e7a" />
        <ellipse cx="100" cy="120" rx="22" ry="18" fill="#607d8b" />
        {/* Pattern on abdomen */}
        <circle cx="100" cy="112" r="5" fill="#78909c" />
        <circle cx="92" cy="122" r="3" fill="#78909c" />
        <circle cx="108" cy="122" r="3" fill="#78909c" />
        {/* Cephalothorax */}
        <circle cx="100" cy="78" r="22" fill="#455a64" />
        {/* Eyes — 8 of them! */}
        <circle cx="92" cy="72" r="6" fill="white" />
        <circle cx="108" cy="72" r="6" fill="white" />
        <circle cx="93" cy="71" r="3.5" fill="#333" />
        <circle cx="109" cy="71" r="3.5" fill="#333" />
        <circle cx="94" cy="69" r="1.2" fill="white" />
        <circle cx="110" cy="69" r="1.2" fill="white" />
        {/* Small top eyes */}
        <circle cx="95" cy="64" r="2.5" fill="white" />
        <circle cx="105" cy="64" r="2.5" fill="white" />
        <circle cx="95" cy="64" r="1.5" fill="#333" />
        <circle cx="105" cy="64" r="1.5" fill="#333" />
        {/* Side eyes */}
        <circle cx="84" cy="75" r="2" fill="white" />
        <circle cx="116" cy="75" r="2" fill="white" />
        <circle cx="84" cy="75" r="1.2" fill="#333" />
        <circle cx="116" cy="75" r="1.2" fill="#333" />
        {/* Smile */}
        <path
          d="M 93 84 Q 100 90 107 84"
          stroke="white"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
        />
        {/* Legs — 4 on each side */}
        <g class="spider-leg-l">
          <path
            d="M 80 80 Q 50 55 30 45"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 30 45 Q 25 55 15 60"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 78 88 Q 45 75 25 72"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 25 72 Q 18 80 10 85"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 78 95 Q 45 100 28 108"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 28 108 Q 20 118 12 125"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 80 105 Q 55 120 38 138"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 38 138 Q 30 148 22 155"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
        </g>
        <g class="spider-leg-r">
          <path
            d="M 120 80 Q 150 55 170 45"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 170 45 Q 175 55 185 60"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 122 88 Q 155 75 175 72"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 175 72 Q 182 80 190 85"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 122 95 Q 155 100 172 108"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 172 108 Q 180 118 188 125"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 120 105 Q 145 120 162 138"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 162 138 Q 170 148 178 155"
            stroke="#37474f"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
        </g>
      </g>
    </svg>
  );
}
