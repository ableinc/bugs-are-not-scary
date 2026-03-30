export default function PrayingMantisSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="mantis-title"
      class="bug-svg"
    >
      <title id="mantis-title">A patient praying mantis</title>
      <style>{`
        .mantis-body { animation: mantis-sway 3s ease-in-out infinite; }
        .mantis-arms { animation: mantis-pray 2s ease-in-out infinite; transform-origin: 80px 100px; }
        .mantis-head { animation: mantis-look 4s ease-in-out infinite; transform-origin: 85px 55px; }
        @keyframes mantis-sway { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(2px); } }
        @keyframes mantis-pray { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(-3deg); } }
        @keyframes mantis-look { 0%, 100% { transform: rotate(0); } 30% { transform: rotate(8deg); } 70% { transform: rotate(-5deg); } }
      `}</style>
      <g class="mantis-body">
        <ellipse cx="100" cy="185" rx="35" ry="5" fill="rgba(0,0,0,0.07)" />
        {/* Abdomen */}
        <ellipse cx="120" cy="140" rx="18" ry="30" fill="#689f38" transform="rotate(15 120 140)" />
        <ellipse cx="120" cy="140" rx="12" ry="22" fill="#7cb342" transform="rotate(15 120 140)" />
        {/* Wing hints */}
        <ellipse
          cx="115"
          cy="128"
          rx="20"
          ry="8"
          fill="#8bc34a"
          opacity="0.4"
          transform="rotate(-10 115 128)"
        />
        {/* Thorax */}
        <rect x="78" y="80" width="12" height="55" rx="6" fill="#558b2f" />
        {/* Head */}
        <g class="mantis-head">
          <path d="M 85 57 L 70 48 L 75 62 Z" fill="#689f38" />
          <circle cx="85" cy="50" r="16" fill="#689f38" />
          {/* Triangle head shape */}
          {/* Big eyes */}
          <circle cx="76" cy="45" r="7" fill="#c5e1a5" />
          <circle cx="94" cy="45" r="7" fill="#c5e1a5" />
          <circle cx="78" cy="44" r="4" fill="#333" />
          <circle cx="96" cy="44" r="4" fill="#333" />
          <circle cx="79" cy="42" r="1.5" fill="white" />
          <circle cx="97" cy="42" r="1.5" fill="white" />
          {/* Smile */}
          <path
            d="M 80 56 Q 85 61 90 56"
            stroke="#33691e"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
          />
          {/* Antennae */}
          <path
            d="M 78 36 Q 65 18 58 12"
            stroke="#558b2f"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 92 36 Q 95 15 100 8"
            stroke="#558b2f"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
          />
        </g>
        {/* Praying arms */}
        <g class="mantis-arms">
          <path
            d="M 80 90 Q 55 75 45 55"
            stroke="#33691e"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 45 55 Q 42 45 48 38"
            stroke="#33691e"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          {/* Spikes on arms */}
          <line
            x1="60"
            y1="78"
            x2="55"
            y2="73"
            stroke="#33691e"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <line
            x1="52"
            y1="68"
            x2="47"
            y2="63"
            stroke="#33691e"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M 82 92 Q 60 80 52 62"
            stroke="#33691e"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <path
            d="M 52 62 Q 48 52 54 45"
            stroke="#33691e"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
          />
        </g>
        {/* Back legs */}
        <path
          d="M 90 130 Q 70 150 60 168"
          stroke="#33691e"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 95 135 Q 80 155 72 172"
          stroke="#33691e"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 110 145 Q 120 160 125 175"
          stroke="#33691e"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M 115 150 Q 130 162 138 175"
          stroke="#33691e"
          stroke-width="2.5"
          fill="none"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
}
