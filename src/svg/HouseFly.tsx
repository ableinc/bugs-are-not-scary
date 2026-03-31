export default function HouseFlySvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="housefly-title"
      class="bug-svg"
    >
      <title id="housefly-title">A buzzy house fly</title>
      <style>{`
        @keyframes fly-hover { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
        @keyframes wing-buzz { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(0.6)} }
        .fly-body { animation: fly-hover 1.5s ease-in-out infinite; }
        .fly-wing-l { animation: wing-buzz 0.12s ease-in-out infinite; transform-origin: 95px 85px; }
        .fly-wing-r { animation: wing-buzz 0.12s ease-in-out infinite 0.06s; transform-origin: 105px 85px; }
      `}</style>
      <g class="fly-body">
        {/* Wings */}
        <ellipse class="fly-wing-l" cx="68" cy="72" rx="30" ry="16" fill="#b0bec5" opacity="0.5" transform="rotate(-20 68 72)" />
        <ellipse class="fly-wing-r" cx="132" cy="72" rx="30" ry="16" fill="#b0bec5" opacity="0.5" transform="rotate(20 132 72)" />
        {/* Abdomen */}
        <ellipse cx="100" cy="140" rx="26" ry="30" fill="#455a64" />
        <ellipse cx="100" cy="140" rx="26" ry="30" fill="none" stroke="#37474f" stroke-width="1.5" />
        {/* Stripes */}
        <path d="M78 132 Q100 128 122 132" fill="none" stroke="#37474f" stroke-width="1.2" />
        <path d="M76 142 Q100 138 124 142" fill="none" stroke="#37474f" stroke-width="1.2" />
        <path d="M78 152 Q100 148 122 152" fill="none" stroke="#37474f" stroke-width="1.2" />
        {/* Thorax */}
        <ellipse cx="100" cy="105" rx="20" ry="16" fill="#546e7a" />
        {/* Head */}
        <circle cx="100" cy="72" r="20" fill="#455a64" />
        {/* Eyes – large compound eyes */}
        <ellipse cx="86" cy="66" rx="11" ry="12" fill="#b71c1c" />
        <ellipse cx="114" cy="66" rx="11" ry="12" fill="#b71c1c" />
        <ellipse cx="87" cy="64" rx="4" ry="5" fill="#e57373" opacity="0.5" />
        <ellipse cx="115" cy="64" rx="4" ry="5" fill="#e57373" opacity="0.5" />
        {/* Proboscis */}
        <line x1="100" y1="82" x2="100" y2="95" stroke="#37474f" stroke-width="2" stroke-linecap="round" />
        {/* Smile */}
        <path d="M94 79 Q100 84 106 79" fill="none" stroke="#b0bec5" stroke-width="1.5" stroke-linecap="round" />
        {/* Antennae */}
        <line x1="92" y1="55" x2="82" y2="38" stroke="#37474f" stroke-width="2" stroke-linecap="round" />
        <circle cx="81" cy="36" r="2.5" fill="#546e7a" />
        <line x1="108" y1="55" x2="118" y2="38" stroke="#37474f" stroke-width="2" stroke-linecap="round" />
        <circle cx="119" cy="36" r="2.5" fill="#546e7a" />
        {/* Legs */}
        <line x1="84" y1="108" x2="58" y2="125" stroke="#37474f" stroke-width="2.5" stroke-linecap="round" />
        <line x1="58" y1="125" x2="50" y2="142" stroke="#37474f" stroke-width="2.5" stroke-linecap="round" />
        <line x1="116" y1="108" x2="142" y2="125" stroke="#37474f" stroke-width="2.5" stroke-linecap="round" />
        <line x1="142" y1="125" x2="150" y2="142" stroke="#37474f" stroke-width="2.5" stroke-linecap="round" />
        <line x1="82" y1="118" x2="56" y2="140" stroke="#37474f" stroke-width="2.5" stroke-linecap="round" />
        <line x1="56" y1="140" x2="50" y2="158" stroke="#37474f" stroke-width="2.5" stroke-linecap="round" />
        <line x1="118" y1="118" x2="144" y2="140" stroke="#37474f" stroke-width="2.5" stroke-linecap="round" />
        <line x1="144" y1="140" x2="150" y2="158" stroke="#37474f" stroke-width="2.5" stroke-linecap="round" />
        <line x1="85" y1="145" x2="60" y2="168" stroke="#37474f" stroke-width="2.5" stroke-linecap="round" />
        <line x1="60" y1="168" x2="55" y2="180" stroke="#37474f" stroke-width="2.5" stroke-linecap="round" />
        <line x1="115" y1="145" x2="140" y2="168" stroke="#37474f" stroke-width="2.5" stroke-linecap="round" />
        <line x1="140" y1="168" x2="145" y2="180" stroke="#37474f" stroke-width="2.5" stroke-linecap="round" />
      </g>
    </svg>
  );
}
