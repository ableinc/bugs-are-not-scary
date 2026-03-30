export default function LadybugSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="ladybug-title"
      class="bug-svg"
    >
      <title id="ladybug-title">A friendly ladybug</title>
      <style>{`
        @keyframes ladybug-wobble { 0%,100%{transform:rotate(-2deg)} 50%{transform:rotate(2deg)} }
        @keyframes antenna-wave { 0%,100%{transform:rotate(-5deg)} 50%{transform:rotate(5deg)} }
        .ladybug-body { animation: ladybug-wobble 3s ease-in-out infinite; transform-origin: center 120px; }
        .ladybug-antenna { animation: antenna-wave 2s ease-in-out infinite; transform-origin: bottom; }
        .ladybug-antenna--r { animation-delay: 0.3s; }
      `}</style>
      <g class="ladybug-body">
        {/* Legs */}
        <line
          x1="70"
          y1="120"
          x2="45"
          y2="145"
          stroke="#2d2d2d"
          stroke-width="4"
          stroke-linecap="round"
        />
        <line
          x1="70"
          y1="135"
          x2="45"
          y2="160"
          stroke="#2d2d2d"
          stroke-width="4"
          stroke-linecap="round"
        />
        <line
          x1="75"
          y1="148"
          x2="55"
          y2="172"
          stroke="#2d2d2d"
          stroke-width="4"
          stroke-linecap="round"
        />
        <line
          x1="130"
          y1="120"
          x2="155"
          y2="145"
          stroke="#2d2d2d"
          stroke-width="4"
          stroke-linecap="round"
        />
        <line
          x1="130"
          y1="135"
          x2="155"
          y2="160"
          stroke="#2d2d2d"
          stroke-width="4"
          stroke-linecap="round"
        />
        <line
          x1="125"
          y1="148"
          x2="145"
          y2="172"
          stroke="#2d2d2d"
          stroke-width="4"
          stroke-linecap="round"
        />
        {/* Body (red shell) */}
        <ellipse cx="100" cy="125" rx="48" ry="52" fill="#e53935" />
        <ellipse cx="100" cy="125" rx="48" ry="52" fill="none" stroke="#c62828" stroke-width="2" />
        {/* Center line */}
        <line x1="100" y1="75" x2="100" y2="177" stroke="#2d2d2d" stroke-width="2.5" />
        {/* Spots */}
        <circle cx="82" cy="105" r="8" fill="#2d2d2d" />
        <circle cx="118" cy="105" r="8" fill="#2d2d2d" />
        <circle cx="75" cy="135" r="7" fill="#2d2d2d" />
        <circle cx="125" cy="135" r="7" fill="#2d2d2d" />
        <circle cx="88" cy="158" r="6" fill="#2d2d2d" />
        <circle cx="112" cy="158" r="6" fill="#2d2d2d" />
        {/* Head */}
        <circle cx="100" cy="78" r="22" fill="#2d2d2d" />
        {/* Eyes */}
        <circle cx="91" cy="73" r="8" fill="white" />
        <circle cx="109" cy="73" r="8" fill="white" />
        <circle cx="93" cy="72" r="4" fill="#2d2d2d" />
        <circle cx="111" cy="72" r="4" fill="#2d2d2d" />
        <circle cx="94" cy="71" r="1.5" fill="white" />
        <circle cx="112" cy="71" r="1.5" fill="white" />
        {/* Smile */}
        <path
          d="M92 82 Q100 90 108 82"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        {/* Antennae */}
        <g class="ladybug-antenna">
          <path
            d="M90 60 Q82 35 75 28"
            fill="none"
            stroke="#2d2d2d"
            stroke-width="3"
            stroke-linecap="round"
          />
          <circle cx="74" cy="26" r="4" fill="#2d2d2d" />
        </g>
        <g class="ladybug-antenna ladybug-antenna--r">
          <path
            d="M110 60 Q118 35 125 28"
            fill="none"
            stroke="#2d2d2d"
            stroke-width="3"
            stroke-linecap="round"
          />
          <circle cx="126" cy="26" r="4" fill="#2d2d2d" />
        </g>
        {/* Cheek blush */}
        <circle cx="83" cy="80" r="5" fill="#ff8a80" opacity="0.5" />
        <circle cx="117" cy="80" r="5" fill="#ff8a80" opacity="0.5" />
      </g>
    </svg>
  );
}
