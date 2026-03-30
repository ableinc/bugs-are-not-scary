export default function BeeSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="bee-title"
      class="bug-svg"
    >
      <title id="bee-title">A friendly buzzing bee</title>
      <style>{`
        @keyframes bee-buzz { 0%,100%{transform:translateY(0)} 25%{transform:translateY(-3px)} 75%{transform:translateY(3px)} }
        @keyframes wing-flap { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(0.7)} }
        .bee-g { animation: bee-buzz 2s ease-in-out infinite; }
        .bee-wing { animation: wing-flap 0.15s ease-in-out infinite; }
        .bee-wing--r { animation-delay: 0.075s; }
      `}</style>
      <g class="bee-g">
        {/* Wings */}
        <ellipse
          class="bee-wing"
          cx="72"
          cy="68"
          rx="28"
          ry="18"
          fill="#e3f2fd"
          stroke="#90caf9"
          stroke-width="1.5"
          opacity="0.8"
          transform="rotate(-20 72 68)"
        />
        <ellipse
          class="bee-wing bee-wing--r"
          cx="128"
          cy="68"
          rx="28"
          ry="18"
          fill="#e3f2fd"
          stroke="#90caf9"
          stroke-width="1.5"
          opacity="0.8"
          transform="rotate(20 128 68)"
        />
        {/* Body */}
        <ellipse cx="100" cy="110" rx="38" ry="48" fill="#fdd835" />
        {/* Stripes */}
        <rect x="62" y="95" width="76" height="10" rx="5" fill="#2d2d2d" />
        <rect x="64" y="113" width="72" height="10" rx="5" fill="#2d2d2d" />
        <rect x="68" y="131" width="64" height="10" rx="5" fill="#2d2d2d" />
        {/* Head */}
        <circle cx="100" cy="65" r="24" fill="#fdd835" />
        <circle cx="100" cy="65" r="24" fill="none" stroke="#f9a825" stroke-width="1.5" />
        {/* Eyes */}
        <circle cx="90" cy="60" r="8" fill="white" />
        <circle cx="110" cy="60" r="8" fill="white" />
        <circle cx="92" cy="59" r="4" fill="#2d2d2d" />
        <circle cx="112" cy="59" r="4" fill="#2d2d2d" />
        <circle cx="93" cy="58" r="1.5" fill="white" />
        <circle cx="113" cy="58" r="1.5" fill="white" />
        {/* Smile */}
        <path
          d="M92 72 Q100 80 108 72"
          fill="none"
          stroke="#5d4037"
          stroke-width="2"
          stroke-linecap="round"
        />
        {/* Antennae */}
        <path
          d="M90 44 Q82 22 76 16"
          fill="none"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <circle cx="75" cy="14" r="3.5" fill="#5d4037" />
        <path
          d="M110 44 Q118 22 124 16"
          fill="none"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <circle cx="125" cy="14" r="3.5" fill="#5d4037" />
        {/* Cheeks */}
        <circle cx="82" cy="68" r="4" fill="#ffcc80" opacity="0.6" />
        <circle cx="118" cy="68" r="4" fill="#ffcc80" opacity="0.6" />
        {/* Stinger */}
        <ellipse cx="100" cy="160" rx="4" ry="6" fill="#5d4037" />
        {/* Legs */}
        <line
          x1="72"
          y1="120"
          x2="55"
          y2="140"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="72"
          y1="135"
          x2="55"
          y2="152"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="128"
          y1="120"
          x2="145"
          y2="140"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="128"
          y1="135"
          x2="145"
          y2="152"
          stroke="#5d4037"
          stroke-width="2.5"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
}
