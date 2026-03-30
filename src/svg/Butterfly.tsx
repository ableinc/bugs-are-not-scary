export default function ButterflySvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="butterfly-title"
      class="bug-svg"
    >
      <title id="butterfly-title">A colorful butterfly</title>
      <style>{`
        @keyframes flutter { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(0.85)} }
        .wing-l { animation: flutter 1.2s ease-in-out infinite; transform-origin: 100px 100px; }
        .wing-r { animation: flutter 1.2s ease-in-out infinite; transform-origin: 100px 100px; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        .butterfly-g { animation: float 3s ease-in-out infinite; }
      `}</style>
      <g class="butterfly-g">
        {/* Left wings */}
        <g class="wing-l">
          <ellipse
            cx="68"
            cy="80"
            rx="38"
            ry="32"
            fill="#8e24aa"
            opacity="0.85"
            transform="rotate(-15 68 80)"
          />
          <ellipse cx="68" cy="80" rx="30" ry="24" fill="#ab47bc" transform="rotate(-15 68 80)" />
          <ellipse cx="62" cy="78" rx="12" ry="10" fill="#ce93d8" transform="rotate(-15 62 78)" />
          <ellipse
            cx="72"
            cy="128"
            rx="30"
            ry="25"
            fill="#8e24aa"
            opacity="0.85"
            transform="rotate(15 72 128)"
          />
          <ellipse cx="72" cy="128" rx="22" ry="18" fill="#ab47bc" transform="rotate(15 72 128)" />
        </g>
        {/* Right wings */}
        <g class="wing-r">
          <ellipse
            cx="132"
            cy="80"
            rx="38"
            ry="32"
            fill="#8e24aa"
            opacity="0.85"
            transform="rotate(15 132 80)"
          />
          <ellipse cx="132" cy="80" rx="30" ry="24" fill="#ab47bc" transform="rotate(15 132 80)" />
          <ellipse cx="138" cy="78" rx="12" ry="10" fill="#ce93d8" transform="rotate(15 138 78)" />
          <ellipse
            cx="128"
            cy="128"
            rx="30"
            ry="25"
            fill="#8e24aa"
            opacity="0.85"
            transform="rotate(-15 128 128)"
          />
          <ellipse
            cx="128"
            cy="128"
            rx="22"
            ry="18"
            fill="#ab47bc"
            transform="rotate(-15 128 128)"
          />
        </g>
        {/* Body */}
        <ellipse cx="100" cy="105" rx="8" ry="42" fill="#4a148c" />
        {/* Head */}
        <circle cx="100" cy="58" r="12" fill="#4a148c" />
        {/* Eyes */}
        <circle cx="95" cy="55" r="5" fill="white" />
        <circle cx="105" cy="55" r="5" fill="white" />
        <circle cx="96" cy="54" r="2.5" fill="#2d2d2d" />
        <circle cx="106" cy="54" r="2.5" fill="#2d2d2d" />
        <circle cx="97" cy="53" r="1" fill="white" />
        <circle cx="107" cy="53" r="1" fill="white" />
        {/* Smile */}
        <path
          d="M95 62 Q100 67 105 62"
          fill="none"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        {/* Antennae */}
        <path
          d="M95 48 Q85 25 78 20"
          fill="none"
          stroke="#4a148c"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <circle cx="77" cy="19" r="3.5" fill="#ce93d8" />
        <path
          d="M105 48 Q115 25 122 20"
          fill="none"
          stroke="#4a148c"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <circle cx="123" cy="19" r="3.5" fill="#ce93d8" />
        {/* Cheeks */}
        <circle cx="90" cy="61" r="3" fill="#f48fb1" opacity="0.5" />
        <circle cx="110" cy="61" r="3" fill="#f48fb1" opacity="0.5" />
      </g>
    </svg>
  );
}
