export default function GnatSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="gnat-title"
      class="bug-svg"
    >
      <title id="gnat-title">A tiny little gnat</title>
      <style>{`
        @keyframes gnat-float { 0%,100%{transform:translate(0,0)} 25%{transform:translate(2px,-2px)} 50%{transform:translate(0,-3px)} 75%{transform:translate(-2px,-2px)} }
        @keyframes gnat-wing { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(0.5)} }
        .gnat-g { animation: gnat-float 2s ease-in-out infinite; }
        .gnat-wing-l { animation: gnat-wing 0.1s ease-in-out infinite; transform-origin: 96px 88px; }
        .gnat-wing-r { animation: gnat-wing 0.1s ease-in-out infinite 0.05s; transform-origin: 104px 88px; }
      `}</style>
      <g class="gnat-g">
        {/* Wings */}
        <ellipse class="gnat-wing-l" cx="72" cy="74" rx="24" ry="10" fill="#cfd8dc" opacity="0.5" transform="rotate(-15 72 74)" />
        <ellipse class="gnat-wing-r" cx="128" cy="74" rx="24" ry="10" fill="#cfd8dc" opacity="0.5" transform="rotate(15 128 74)" />
        {/* Abdomen – long and slim */}
        <ellipse cx="100" cy="145" rx="12" ry="28" fill="#6d6d6d" />
        <ellipse cx="100" cy="145" rx="12" ry="28" fill="none" stroke="#555" stroke-width="1" />
        {/* Thorax */}
        <ellipse cx="100" cy="108" rx="14" ry="12" fill="#757575" />
        {/* Head */}
        <circle cx="100" cy="78" r="16" fill="#616161" />
        {/* Eyes */}
        <circle cx="90" cy="74" r="7" fill="#e0e0e0" />
        <circle cx="110" cy="74" r="7" fill="#e0e0e0" />
        <circle cx="91" cy="73" r="3.5" fill="#2d2d2d" />
        <circle cx="111" cy="73" r="3.5" fill="#2d2d2d" />
        <circle cx="92" cy="72" r="1.3" fill="white" />
        <circle cx="112" cy="72" r="1.3" fill="white" />
        {/* Smile */}
        <path d="M95 85 Q100 90 105 85" fill="none" stroke="#bdbdbd" stroke-width="1.5" stroke-linecap="round" />
        {/* Antennae */}
        <path d="M92 64 Q85 42 78 35" fill="none" stroke="#555" stroke-width="1.5" stroke-linecap="round" />
        <path d="M108 64 Q115 42 122 35" fill="none" stroke="#555" stroke-width="1.5" stroke-linecap="round" />
        {/* Long dangling legs */}
        <line x1="90" y1="112" x2="68" y2="145" stroke="#555" stroke-width="1.5" stroke-linecap="round" />
        <line x1="68" y1="145" x2="62" y2="170" stroke="#555" stroke-width="1.5" stroke-linecap="round" />
        <line x1="110" y1="112" x2="132" y2="145" stroke="#555" stroke-width="1.5" stroke-linecap="round" />
        <line x1="132" y1="145" x2="138" y2="170" stroke="#555" stroke-width="1.5" stroke-linecap="round" />
        <line x1="92" y1="118" x2="70" y2="155" stroke="#555" stroke-width="1.5" stroke-linecap="round" />
        <line x1="70" y1="155" x2="65" y2="182" stroke="#555" stroke-width="1.5" stroke-linecap="round" />
        <line x1="108" y1="118" x2="130" y2="155" stroke="#555" stroke-width="1.5" stroke-linecap="round" />
        <line x1="130" y1="155" x2="135" y2="182" stroke="#555" stroke-width="1.5" stroke-linecap="round" />
      </g>
    </svg>
  );
}
