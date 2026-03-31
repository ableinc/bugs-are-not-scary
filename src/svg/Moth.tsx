export default function MothSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="moth-title"
      class="bug-svg"
    >
      <title id="moth-title">A fluffy moth with fuzzy wings</title>
      <style>{`
        @keyframes moth-flutter { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(0.92)} }
        @keyframes moth-bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-2px)} }
        .moth-wings { animation: moth-flutter 0.8s ease-in-out infinite; transform-origin: 100px 105px; }
        .moth-body { animation: moth-bob 2s ease-in-out infinite; }
      `}</style>
      <g class="moth-body">
        {/* Wings */}
        <g class="moth-wings">
          {/* Left upper wing */}
          <path
            d="M95 90 Q55 50 40 80 Q35 105 80 110 Z"
            fill="#a1887f"
            stroke="#8d6e63"
            stroke-width="1.5"
          />
          <path
            d="M75 82 Q65 72 55 82"
            fill="none"
            stroke="#6d4c41"
            stroke-width="1"
            opacity="0.6"
          />
          <circle cx="62" cy="88" r="6" fill="#6d4c41" opacity="0.3" />
          {/* Right upper wing */}
          <path
            d="M105 90 Q145 50 160 80 Q165 105 120 110 Z"
            fill="#a1887f"
            stroke="#8d6e63"
            stroke-width="1.5"
          />
          <path
            d="M125 82 Q135 72 145 82"
            fill="none"
            stroke="#6d4c41"
            stroke-width="1"
            opacity="0.6"
          />
          <circle cx="138" cy="88" r="6" fill="#6d4c41" opacity="0.3" />
          {/* Left lower wing */}
          <path
            d="M90 110 Q55 120 50 145 Q60 160 88 135 Z"
            fill="#bcaaa4"
            stroke="#8d6e63"
            stroke-width="1.5"
          />
          {/* Right lower wing */}
          <path
            d="M110 110 Q145 120 150 145 Q140 160 112 135 Z"
            fill="#bcaaa4"
            stroke="#8d6e63"
            stroke-width="1.5"
          />
        </g>
        {/* Abdomen */}
        <ellipse cx="100" cy="140" rx="10" ry="22" fill="#8d6e63" />
        <ellipse cx="100" cy="140" rx="10" ry="22" fill="none" stroke="#6d4c41" stroke-width="1" />
        {/* Thorax (fluffy) */}
        <ellipse cx="100" cy="105" rx="14" ry="12" fill="#a1887f" />
        <ellipse cx="100" cy="102" rx="12" ry="8" fill="#bcaaa4" opacity="0.6" />
        {/* Head */}
        <circle cx="100" cy="78" r="14" fill="#8d6e63" />
        {/* Fluff on head */}
        <ellipse cx="100" cy="72" rx="10" ry="5" fill="#bcaaa4" opacity="0.5" />
        {/* Eyes */}
        <circle cx="92" cy="76" r="6" fill="#ffcc80" />
        <circle cx="108" cy="76" r="6" fill="#ffcc80" />
        <circle cx="93" cy="75" r="3" fill="#2d2d2d" />
        <circle cx="109" cy="75" r="3" fill="#2d2d2d" />
        <circle cx="94" cy="74" r="1.2" fill="white" />
        <circle cx="110" cy="74" r="1.2" fill="white" />
        {/* Smile */}
        <path
          d="M95 85 Q100 90 105 85"
          fill="none"
          stroke="#d7ccc8"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        {/* Feathery antennae */}
        <path
          d="M92 66 Q82 42 72 32"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="72"
          y1="32"
          x2="65"
          y2="28"
          stroke="#6d4c41"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <line
          x1="72"
          y1="32"
          x2="68"
          y2="25"
          stroke="#6d4c41"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <line
          x1="72"
          y1="32"
          x2="75"
          y2="26"
          stroke="#6d4c41"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M108 66 Q118 42 128 32"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="128"
          y1="32"
          x2="135"
          y2="28"
          stroke="#6d4c41"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <line
          x1="128"
          y1="32"
          x2="132"
          y2="25"
          stroke="#6d4c41"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <line
          x1="128"
          y1="32"
          x2="125"
          y2="26"
          stroke="#6d4c41"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        {/* Legs */}
        <line
          x1="90"
          y1="112"
          x2="70"
          y2="135"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="70"
          y1="135"
          x2="65"
          y2="150"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="110"
          y1="112"
          x2="130"
          y2="135"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="130"
          y1="135"
          x2="135"
          y2="150"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="88"
          y1="120"
          x2="68"
          y2="148"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="68"
          y1="148"
          x2="62"
          y2="165"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="112"
          y1="120"
          x2="132"
          y2="148"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="132"
          y1="148"
          x2="138"
          y2="165"
          stroke="#6d4c41"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
}
