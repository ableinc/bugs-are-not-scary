export default function CaterpillarSvg() {
  return (
    <svg
      viewBox="0 0 220 140"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="caterpillar-title"
      class="bug-svg"
    >
      <title id="caterpillar-title">A happy caterpillar</title>
      <style>{`
        @keyframes inch { 0%,100%{transform:translateX(0)} 50%{transform:translateX(4px)} }
        @keyframes squish1 { 0%,100%{transform:scale(1,1)} 50%{transform:scale(0.95,1.05)} }
        @keyframes squish2 { 0%,100%{transform:scale(1,1)} 50%{transform:scale(1.05,0.95)} }
        .cat-seg-1 { animation: squish1 2s ease-in-out infinite; transform-origin: center; }
        .cat-seg-2 { animation: squish2 2s ease-in-out infinite 0.2s; transform-origin: center; }
        .cat-seg-3 { animation: squish1 2s ease-in-out infinite 0.4s; transform-origin: center; }
        .cat-seg-4 { animation: squish2 2s ease-in-out infinite 0.6s; transform-origin: center; }
        .caterpillar-g { animation: inch 3s ease-in-out infinite; }
      `}</style>
      <g class="caterpillar-g">
        {/* Tail segments */}
        <circle class="cat-seg-4" cx="185" cy="85" r="22" fill="#66bb6a" />
        <circle class="cat-seg-3" cx="152" cy="82" r="24" fill="#4caf50" />
        <circle class="cat-seg-2" cx="117" cy="80" r="26" fill="#43a047" />
        <circle class="cat-seg-1" cx="80" cy="78" r="28" fill="#388e3c" />
        {/* Feet */}
        <ellipse cx="80" cy="108" rx="5" ry="4" fill="#2e7d32" />
        <ellipse cx="90" cy="108" rx="5" ry="4" fill="#2e7d32" />
        <ellipse cx="117" cy="108" rx="5" ry="4" fill="#2e7d32" />
        <ellipse cx="127" cy="108" rx="5" ry="4" fill="#2e7d32" />
        <ellipse cx="152" cy="108" rx="5" ry="4" fill="#2e7d32" />
        <ellipse cx="162" cy="108" rx="5" ry="4" fill="#2e7d32" />
        {/* Head */}
        <circle cx="42" cy="70" r="30" fill="#2e7d32" />
        {/* Eyes */}
        <circle cx="32" cy="62" r="9" fill="white" />
        <circle cx="52" cy="62" r="9" fill="white" />
        <circle cx="34" cy="61" r="4.5" fill="#2d2d2d" />
        <circle cx="54" cy="61" r="4.5" fill="#2d2d2d" />
        <circle cx="35" cy="60" r="1.8" fill="white" />
        <circle cx="55" cy="60" r="1.8" fill="white" />
        {/* Smile */}
        <path
          d="M32 78 Q42 88 52 78"
          fill="none"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        {/* Antennae */}
        <path
          d="M34 42 Q28 18 22 12"
          fill="none"
          stroke="#2e7d32"
          stroke-width="3"
          stroke-linecap="round"
        />
        <circle cx="21" cy="10" r="4" fill="#ffee58" />
        <path
          d="M50 42 Q56 18 62 12"
          fill="none"
          stroke="#2e7d32"
          stroke-width="3"
          stroke-linecap="round"
        />
        <circle cx="63" cy="10" r="4" fill="#ffee58" />
        {/* Cheeks */}
        <circle cx="26" cy="72" r="5" fill="#a5d6a7" opacity="0.6" />
        <circle cx="58" cy="72" r="5" fill="#a5d6a7" opacity="0.6" />
        {/* Stripe details on segments */}
        <path d="M68 68 Q80 62 92 68" fill="none" stroke="#2e7d32" stroke-width="2" opacity="0.4" />
        <path
          d="M105 66 Q117 60 129 66"
          fill="none"
          stroke="#388e3c"
          stroke-width="2"
          opacity="0.4"
        />
        <path
          d="M140 70 Q152 64 164 70"
          fill="none"
          stroke="#43a047"
          stroke-width="2"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}
