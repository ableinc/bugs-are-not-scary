export default function AntSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="ant-title"
      class="bug-svg"
    >
      <title id="ant-title">A strong little ant</title>
      <style>{`
        @keyframes ant-march { 0%,100%{transform:translateX(0)} 50%{transform:translateX(3px)} }
        @keyframes leg-move { 0%,100%{transform:rotate(0)} 50%{transform:rotate(8deg)} }
        .ant-g { animation: ant-march 2s ease-in-out infinite; }
        .ant-leg-l { animation: leg-move 0.8s ease-in-out infinite; transform-origin: top; }
        .ant-leg-r { animation: leg-move 0.8s ease-in-out infinite 0.4s; transform-origin: top; }
      `}</style>
      <g class="ant-g">
        {/* Abdomen */}
        <ellipse cx="100" cy="150" rx="28" ry="24" fill="#5d4037" />
        <ellipse
          cx="100"
          cy="150"
          rx="28"
          ry="24"
          fill="none"
          stroke="#4e342e"
          stroke-width="1.5"
        />
        {/* Thorax */}
        <ellipse cx="100" cy="110" rx="18" ry="16" fill="#6d4c41" />
        {/* Head */}
        <circle cx="100" cy="72" r="22" fill="#5d4037" />
        {/* Eyes */}
        <circle cx="90" cy="67" r="7" fill="white" />
        <circle cx="110" cy="67" r="7" fill="white" />
        <circle cx="92" cy="66" r="3.5" fill="#2d2d2d" />
        <circle cx="112" cy="66" r="3.5" fill="#2d2d2d" />
        <circle cx="93" cy="65" r="1.3" fill="white" />
        <circle cx="113" cy="65" r="1.3" fill="white" />
        {/* Smile */}
        <path
          d="M93 80 Q100 87 107 80"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        {/* Mandibles */}
        <path
          d="M88 85 Q84 92 80 90"
          fill="none"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <path
          d="M112 85 Q116 92 120 90"
          fill="none"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        {/* Antennae */}
        <path
          d="M88 54 Q78 30 70 22"
          fill="none"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <circle cx="69" cy="20" r="3.5" fill="#6d4c41" />
        <path
          d="M112 54 Q122 30 130 22"
          fill="none"
          stroke="#4e342e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <circle cx="131" cy="20" r="3.5" fill="#6d4c41" />
        {/* Legs */}
        <g class="ant-leg-l">
          <line
            x1="84"
            y1="105"
            x2="55"
            y2="118"
            stroke="#4e342e"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="55"
            y1="118"
            x2="48"
            y2="135"
            stroke="#4e342e"
            stroke-width="3"
            stroke-linecap="round"
          />
        </g>
        <g class="ant-leg-r">
          <line
            x1="116"
            y1="105"
            x2="145"
            y2="118"
            stroke="#4e342e"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="145"
            y1="118"
            x2="152"
            y2="135"
            stroke="#4e342e"
            stroke-width="3"
            stroke-linecap="round"
          />
        </g>
        <g class="ant-leg-r">
          <line
            x1="86"
            y1="115"
            x2="55"
            y2="132"
            stroke="#4e342e"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="55"
            y1="132"
            x2="48"
            y2="150"
            stroke="#4e342e"
            stroke-width="3"
            stroke-linecap="round"
          />
        </g>
        <g class="ant-leg-l">
          <line
            x1="114"
            y1="115"
            x2="145"
            y2="132"
            stroke="#4e342e"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="145"
            y1="132"
            x2="152"
            y2="150"
            stroke="#4e342e"
            stroke-width="3"
            stroke-linecap="round"
          />
        </g>
        <g class="ant-leg-l">
          <line
            x1="82"
            y1="140"
            x2="55"
            y2="162"
            stroke="#4e342e"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="55"
            y1="162"
            x2="50"
            y2="178"
            stroke="#4e342e"
            stroke-width="3"
            stroke-linecap="round"
          />
        </g>
        <g class="ant-leg-r">
          <line
            x1="118"
            y1="140"
            x2="145"
            y2="162"
            stroke="#4e342e"
            stroke-width="3"
            stroke-linecap="round"
          />
          <line
            x1="145"
            y1="162"
            x2="150"
            y2="178"
            stroke="#4e342e"
            stroke-width="3"
            stroke-linecap="round"
          />
        </g>
        {/* Cheeks */}
        <circle cx="84" cy="73" r="4" fill="#8d6e63" opacity="0.5" />
        <circle cx="116" cy="73" r="4" fill="#8d6e63" opacity="0.5" />
      </g>
    </svg>
  );
}
