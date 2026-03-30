export default function CricketSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="cricket-title"
      class="bug-svg"
    >
      <title id="cricket-title">A cheerful singing cricket</title>
      <style>{`
        @keyframes cricket-bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes wing-strum { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(5deg)} }
        .cricket-g { animation: cricket-bounce 1.8s ease-in-out infinite; }
        .cricket-wing { animation: wing-strum 0.4s ease-in-out infinite; transform-origin: 100px 105px; }
      `}</style>
      <g class="cricket-g">
        {/* Abdomen */}
        <ellipse cx="100" cy="148" rx="30" ry="22" fill="#6d4c41" />
        <ellipse
          cx="100"
          cy="148"
          rx="30"
          ry="22"
          fill="none"
          stroke="#4e342e"
          stroke-width="1.5"
        />
        {/* abdomen stripes */}
        <line
          x1="78"
          y1="140"
          x2="122"
          y2="140"
          stroke="#4e342e"
          stroke-width="1.2"
          opacity="0.5"
        />
        <line
          x1="76"
          y1="150"
          x2="124"
          y2="150"
          stroke="#4e342e"
          stroke-width="1.2"
          opacity="0.5"
        />
        {/* Wings */}
        <g class="cricket-wing">
          <ellipse cx="95" cy="118" rx="26" ry="14" fill="#8d6e63" opacity="0.85" />
          <ellipse cx="105" cy="118" rx="26" ry="14" fill="#795548" opacity="0.75" />
          {/* wing veins */}
          <line
            x1="82"
            y1="113"
            x2="82"
            y2="128"
            stroke="#5d4037"
            stroke-width="0.9"
            opacity="0.6"
          />
          <line
            x1="90"
            y1="108"
            x2="90"
            y2="130"
            stroke="#5d4037"
            stroke-width="0.9"
            opacity="0.6"
          />
          <line
            x1="100"
            y1="106"
            x2="100"
            y2="130"
            stroke="#5d4037"
            stroke-width="0.9"
            opacity="0.6"
          />
          <line
            x1="110"
            y1="108"
            x2="110"
            y2="130"
            stroke="#5d4037"
            stroke-width="0.9"
            opacity="0.6"
          />
        </g>
        {/* Thorax */}
        <ellipse cx="100" cy="107" rx="18" ry="14" fill="#795548" />
        {/* Head */}
        <circle cx="100" cy="76" r="22" fill="#6d4c41" />
        {/* Eyes */}
        <circle cx="88" cy="70" r="7.5" fill="white" />
        <circle cx="112" cy="70" r="7.5" fill="white" />
        <circle cx="90" cy="69" r="3.8" fill="#1a1a1a" />
        <circle cx="114" cy="69" r="3.8" fill="#1a1a1a" />
        <circle cx="91" cy="68" r="1.4" fill="white" />
        <circle cx="115" cy="68" r="1.4" fill="white" />
        {/* Smile */}
        <path
          d="M91 82 Q100 90 109 82"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        {/* Antennae */}
        <path
          d="M90 57 Q76 38 65 26"
          fill="none"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <circle cx="63" cy="24" r="3" fill="#6d4c41" />
        <path
          d="M110 57 Q124 38 135 26"
          fill="none"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <circle cx="137" cy="24" r="3" fill="#6d4c41" />
        {/* Front legs */}
        <line
          x1="84"
          y1="105"
          x2="62"
          y2="120"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="62"
          y1="120"
          x2="55"
          y2="135"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="116"
          y1="105"
          x2="138"
          y2="120"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="138"
          y1="120"
          x2="145"
          y2="135"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        {/* Middle legs */}
        <line
          x1="82"
          y1="118"
          x2="58"
          y2="138"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="58"
          y1="138"
          x2="50"
          y2="155"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="118"
          y1="118"
          x2="142"
          y2="138"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="142"
          y1="138"
          x2="150"
          y2="155"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        {/* Big hind legs */}
        <path
          d="M83 145 Q55 130 40 160"
          fill="none"
          stroke="#4e342e"
          stroke-width="3.5"
          stroke-linecap="round"
        />
        <path
          d="M117 145 Q145 130 160 160"
          fill="none"
          stroke="#4e342e"
          stroke-width="3.5"
          stroke-linecap="round"
        />
        {/* Cheeks */}
        <circle cx="83" cy="77" r="5" fill="#a1887f" opacity="0.45" />
        <circle cx="117" cy="77" r="5" fill="#a1887f" opacity="0.45" />
        {/* Music notes */}
        <text x="148" y="68" font-size="14" opacity="0.7" fill="#795548">
          ♪
        </text>
        <text x="158" y="85" font-size="11" opacity="0.5" fill="#795548">
          ♫
        </text>
      </g>
    </svg>
  );
}
