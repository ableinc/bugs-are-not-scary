export default function CicadaSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="cicada-title"
      class="bug-svg"
    >
      <title id="cicada-title">A loudly singing cicada</title>
      <style>{`
        @keyframes cicada-pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.025)} }
        @keyframes cicada-wing { 0%,100%{transform:translateY(0)} 50%{transform:translateY(3px)} }
        .cicada-body { animation: cicada-pulse 2s ease-in-out infinite; transform-origin: 100px 115px; }
        .cicada-wing { animation: cicada-wing 0.22s ease-in-out infinite; }
      `}</style>
      <g class="cicada-body">
        {/* Wings – upper pair */}
        <ellipse
          cx="57"
          cy="103"
          rx="44"
          ry="15"
          fill="rgba(198,240,212,0.58)"
          stroke="#66bb6a"
          stroke-width="1.5"
          transform="rotate(-18, 57, 103)"
          class="cicada-wing"
        />
        <ellipse
          cx="143"
          cy="103"
          rx="44"
          ry="15"
          fill="rgba(198,240,212,0.58)"
          stroke="#66bb6a"
          stroke-width="1.5"
          transform="rotate(18, 143, 103)"
          class="cicada-wing"
        />
        {/* Wings – lower pair */}
        <ellipse
          cx="62"
          cy="124"
          rx="33"
          ry="11"
          fill="rgba(198,240,212,0.45)"
          stroke="#66bb6a"
          stroke-width="1.2"
          transform="rotate(-12, 62, 124)"
          class="cicada-wing"
        />
        <ellipse
          cx="138"
          cy="124"
          rx="33"
          ry="11"
          fill="rgba(198,240,212,0.45)"
          stroke="#66bb6a"
          stroke-width="1.2"
          transform="rotate(12, 138, 124)"
          class="cicada-wing"
        />

        {/* Abdomen – rounded, segmented */}
        <ellipse cx="100" cy="136" rx="26" ry="40" fill="#558b2f" />
        <ellipse
          cx="100"
          cy="136"
          rx="26"
          ry="40"
          fill="none"
          stroke="#33691e"
          stroke-width="1.5"
        />
        {/* Abdomen segment lines */}
        <path
          d="M76,112 Q100,108 124,112"
          fill="none"
          stroke="#33691e"
          stroke-width="1"
          opacity="0.55"
        />
        <path
          d="M74,126 Q100,121 126,126"
          fill="none"
          stroke="#33691e"
          stroke-width="1"
          opacity="0.55"
        />
        <path
          d="M74,140 Q100,135 126,140"
          fill="none"
          stroke="#33691e"
          stroke-width="1"
          opacity="0.55"
        />
        <path
          d="M76,154 Q100,149 124,154"
          fill="none"
          stroke="#33691e"
          stroke-width="1"
          opacity="0.55"
        />
        <path
          d="M80,167 Q100,163 120,167"
          fill="none"
          stroke="#33691e"
          stroke-width="1"
          opacity="0.55"
        />

        {/* Thorax */}
        <ellipse cx="100" cy="94" rx="23" ry="18" fill="#689f38" />
        <ellipse cx="100" cy="94" rx="23" ry="18" fill="none" stroke="#33691e" stroke-width="1.5" />

        {/* Head */}
        <ellipse cx="100" cy="70" rx="25" ry="21" fill="#7cb342" />
        <ellipse cx="100" cy="70" rx="25" ry="21" fill="none" stroke="#33691e" stroke-width="1.5" />

        {/* Large compound eyes */}
        <ellipse cx="80" cy="66" rx="12" ry="14" fill="#d32f2f" />
        <ellipse cx="120" cy="66" rx="12" ry="14" fill="#d32f2f" />
        <circle cx="77" cy="62" r="4.5" fill="white" opacity="0.5" />
        <circle cx="117" cy="62" r="4.5" fill="white" opacity="0.5" />

        {/* Smile */}
        <path
          d="M90 84 Q100 91 110 84"
          fill="none"
          stroke="#1b5e20"
          stroke-width="2.5"
          stroke-linecap="round"
        />

        {/* Cheeks */}
        <circle cx="88" cy="73" r="5" fill="#aed581" opacity="0.5" />
        <circle cx="112" cy="73" r="5" fill="#aed581" opacity="0.5" />

        {/* Short stubby antennae */}
        <path
          d="M89 51 Q83 40 80 33"
          fill="none"
          stroke="#33691e"
          stroke-width="2"
          stroke-linecap="round"
        />
        <circle cx="79" cy="31" r="3" fill="#33691e" />
        <path
          d="M111 51 Q117 40 120 33"
          fill="none"
          stroke="#33691e"
          stroke-width="2"
          stroke-linecap="round"
        />
        <circle cx="121" cy="31" r="3" fill="#33691e" />

        {/* Legs – 3 pairs */}
        <line
          x1="81"
          y1="97"
          x2="54"
          y2="107"
          stroke="#33691e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="54"
          y1="107"
          x2="46"
          y2="120"
          stroke="#33691e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="119"
          y1="97"
          x2="146"
          y2="107"
          stroke="#33691e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="146"
          y1="107"
          x2="154"
          y2="120"
          stroke="#33691e"
          stroke-width="2.5"
          stroke-linecap="round"
        />

        <line
          x1="79"
          y1="108"
          x2="51"
          y2="122"
          stroke="#33691e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="51"
          y1="122"
          x2="43"
          y2="137"
          stroke="#33691e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="121"
          y1="108"
          x2="149"
          y2="122"
          stroke="#33691e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="149"
          y1="122"
          x2="157"
          y2="137"
          stroke="#33691e"
          stroke-width="2.5"
          stroke-linecap="round"
        />

        <line
          x1="79"
          y1="122"
          x2="53"
          y2="140"
          stroke="#33691e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="53"
          y1="140"
          x2="48"
          y2="155"
          stroke="#33691e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="121"
          y1="122"
          x2="147"
          y2="140"
          stroke="#33691e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <line
          x1="147"
          y1="140"
          x2="152"
          y2="155"
          stroke="#33691e"
          stroke-width="2.5"
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
}
