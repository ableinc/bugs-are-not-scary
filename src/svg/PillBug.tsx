export default function PillBugSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="pillbug-title"
      class="bug-svg"
    >
      <title id="pillbug-title">A cute roly-poly pill bug</title>
      <style>{`
        .pillbug-body { animation: pillbug-waddle 2s ease-in-out infinite; }
        .pb-plate { animation: pb-breathe 2.5s ease-in-out infinite; }
        @keyframes pillbug-waddle { 0%, 100% { transform: translateX(0) rotate(0); } 25% { transform: translateX(2px) rotate(1deg); } 75% { transform: translateX(-2px) rotate(-1deg); } }
        @keyframes pb-breathe { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.02); } }
      `}</style>
      <g class="pillbug-body">
        <ellipse cx="100" cy="170" rx="45" ry="6" fill="rgba(0,0,0,0.08)" />
        {/* Main shell dome */}
        <ellipse cx="100" cy="110" rx="52" ry="40" fill="#78909c" />
        <g class="pb-plate">
          {/* Armor plates */}
          <path d="M 52 90 Q 100 82 148 90" fill="none" stroke="#607d8b" stroke-width="2" />
          <path d="M 50 102 Q 100 94 150 102" fill="none" stroke="#607d8b" stroke-width="2" />
          <path d="M 50 114 Q 100 106 150 114" fill="none" stroke="#607d8b" stroke-width="2" />
          <path d="M 52 126 Q 100 118 148 126" fill="none" stroke="#607d8b" stroke-width="2" />
          <path d="M 58 136 Q 100 128 142 136" fill="none" stroke="#607d8b" stroke-width="2" />
        </g>
        {/* Shell highlight */}
        <ellipse cx="88" cy="98" rx="20" ry="15" fill="#90a4ae" opacity="0.4" />
        {/* Head plate */}
        <ellipse cx="100" cy="75" rx="28" ry="15" fill="#607d8b" />
        {/* Eyes */}
        <circle cx="90" cy="73" r="5" fill="white" />
        <circle cx="110" cy="73" r="5" fill="white" />
        <circle cx="92" cy="72" r="3" fill="#333" />
        <circle cx="112" cy="72" r="3" fill="#333" />
        <circle cx="93" cy="70" r="1.2" fill="white" />
        <circle cx="113" cy="70" r="1.2" fill="white" />
        {/* Smile */}
        <path
          d="M 94 80 Q 100 85 106 80"
          stroke="white"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
        />
        {/* Antennae */}
        <path
          d="M 85 65 Q 72 50 65 42"
          stroke="#546e7a"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 115 65 Q 128 50 135 42"
          stroke="#546e7a"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
        {/* Tiny legs — 7 pairs */}
        <line
          x1="60"
          y1="140"
          x2="55"
          y2="152"
          stroke="#546e7a"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="70"
          y1="143"
          x2="66"
          y2="155"
          stroke="#546e7a"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="80"
          y1="146"
          x2="77"
          y2="158"
          stroke="#546e7a"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="90"
          y1="148"
          x2="88"
          y2="160"
          stroke="#546e7a"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="100"
          y1="148"
          x2="100"
          y2="160"
          stroke="#546e7a"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="110"
          y1="148"
          x2="112"
          y2="160"
          stroke="#546e7a"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="120"
          y1="146"
          x2="123"
          y2="158"
          stroke="#546e7a"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="130"
          y1="143"
          x2="134"
          y2="155"
          stroke="#546e7a"
          stroke-width="1.8"
          stroke-linecap="round"
        />
        <line
          x1="140"
          y1="140"
          x2="145"
          y2="152"
          stroke="#546e7a"
          stroke-width="1.8"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
}
