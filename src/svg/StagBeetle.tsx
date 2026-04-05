export default function StagBeetleSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="stag-beetle-title"
      class="bug-svg"
    >
      <title id="stag-beetle-title">An impressive stag beetle</title>
      <style>{`
        @keyframes stag-walk { 0%,100%{transform:translateX(0)} 50%{transform:translateX(3px)} }
        @keyframes stag-leg-l { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(8deg)} }
        @keyframes stag-leg-r { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-8deg)} }
        .stag-g { animation: stag-walk 2s ease-in-out infinite; }
        .sleg-l { animation: stag-leg-l 0.9s ease-in-out infinite; transform-origin: top; }
        .sleg-r { animation: stag-leg-r 0.9s ease-in-out infinite 0.45s; transform-origin: top; }
      `}</style>
      <g class="stag-g">
        {/* Elytra (wing covers) – large, dark, shiny */}
        <ellipse cx="100" cy="133" rx="38" ry="50" fill="#3e2723" />
        {/* Elytra shine highlights */}
        <ellipse cx="88" cy="108" rx="9" ry="26" fill="#6d4c41" opacity="0.38" />
        <ellipse cx="112" cy="108" rx="9" ry="26" fill="#6d4c41" opacity="0.38" />
        {/* Elytra centre seam */}
        <line x1="100" y1="84" x2="100" y2="180" stroke="#1a0e0a" stroke-width="2" />
        <ellipse cx="100" cy="133" rx="38" ry="50" fill="none" stroke="#1a0e0a" stroke-width="2" />

        {/* Thorax */}
        <ellipse cx="100" cy="83" rx="24" ry="19" fill="#4e342e" />
        <ellipse cx="100" cy="83" rx="24" ry="19" fill="none" stroke="#1a0e0a" stroke-width="1.5" />

        {/* Head */}
        <ellipse cx="100" cy="59" rx="21" ry="19" fill="#3e2723" />
        <ellipse cx="100" cy="59" rx="21" ry="19" fill="none" stroke="#1a0e0a" stroke-width="1.5" />

        {/* Eyes */}
        <circle cx="85" cy="54" r="7" fill="white" />
        <circle cx="115" cy="54" r="7" fill="white" />
        <circle cx="87" cy="54" r="3.8" fill="#1a0e0a" />
        <circle cx="117" cy="54" r="3.8" fill="#1a0e0a" />
        <circle cx="87.5" cy="52.5" r="1.5" fill="white" />
        <circle cx="117.5" cy="52.5" r="1.5" fill="white" />

        {/* Smile */}
        <path
          d="M90 70 Q100 77 110 70"
          fill="none"
          stroke="#6d4c41"
          stroke-width="2.2"
          stroke-linecap="round"
        />

        {/* Cheeks */}
        <circle cx="85" cy="61" r="4.5" fill="#6d4c41" opacity="0.4" />
        <circle cx="115" cy="61" r="4.5" fill="#6d4c41" opacity="0.4" />

        {/* Mandibles – large forked, like stag antlers */}
        {/* Left mandible main branch */}
        <path
          d="M82 72 Q70 83 62 80"
          fill="none"
          stroke="#4e342e"
          stroke-width="5.5"
          stroke-linecap="round"
        />
        {/* Left mandible fork prong */}
        <path
          d="M71 81 Q63 90 58 88"
          fill="none"
          stroke="#4e342e"
          stroke-width="4"
          stroke-linecap="round"
        />
        {/* Right mandible main branch */}
        <path
          d="M118 72 Q130 83 138 80"
          fill="none"
          stroke="#4e342e"
          stroke-width="5.5"
          stroke-linecap="round"
        />
        {/* Right mandible fork prong */}
        <path
          d="M129 81 Q137 90 142 88"
          fill="none"
          stroke="#4e342e"
          stroke-width="4"
          stroke-linecap="round"
        />

        {/* Antennae with comb (pectinate) */}
        <path
          d="M87 43 Q82 31 79 23"
          fill="none"
          stroke="#5d4037"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="83"
          y1="39"
          x2="77"
          y2="35"
          stroke="#5d4037"
          stroke-width="1.6"
          stroke-linecap="round"
        />
        <line
          x1="81"
          y1="33"
          x2="75"
          y2="29"
          stroke="#5d4037"
          stroke-width="1.6"
          stroke-linecap="round"
        />
        <circle cx="79" cy="22" r="2.8" fill="#5d4037" />
        <path
          d="M113 43 Q118 31 121 23"
          fill="none"
          stroke="#5d4037"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="117"
          y1="39"
          x2="123"
          y2="35"
          stroke="#5d4037"
          stroke-width="1.6"
          stroke-linecap="round"
        />
        <line
          x1="119"
          y1="33"
          x2="125"
          y2="29"
          stroke="#5d4037"
          stroke-width="1.6"
          stroke-linecap="round"
        />
        <circle cx="121" cy="22" r="2.8" fill="#5d4037" />

        {/* Legs – 3 pairs */}
        <g class="sleg-l">
          <line
            x1="79"
            y1="79"
            x2="51"
            y2="92"
            stroke="#4e342e"
            stroke-width="3.2"
            stroke-linecap="round"
          />
          <line
            x1="51"
            y1="92"
            x2="43"
            y2="109"
            stroke="#4e342e"
            stroke-width="3.2"
            stroke-linecap="round"
          />
        </g>
        <g class="sleg-r">
          <line
            x1="121"
            y1="79"
            x2="149"
            y2="92"
            stroke="#4e342e"
            stroke-width="3.2"
            stroke-linecap="round"
          />
          <line
            x1="149"
            y1="92"
            x2="157"
            y2="109"
            stroke="#4e342e"
            stroke-width="3.2"
            stroke-linecap="round"
          />
        </g>
        <g class="sleg-r">
          <line
            x1="77"
            y1="93"
            x2="47"
            y2="110"
            stroke="#4e342e"
            stroke-width="3.2"
            stroke-linecap="round"
          />
          <line
            x1="47"
            y1="110"
            x2="39"
            y2="129"
            stroke="#4e342e"
            stroke-width="3.2"
            stroke-linecap="round"
          />
        </g>
        <g class="sleg-l">
          <line
            x1="123"
            y1="93"
            x2="153"
            y2="110"
            stroke="#4e342e"
            stroke-width="3.2"
            stroke-linecap="round"
          />
          <line
            x1="153"
            y1="110"
            x2="161"
            y2="129"
            stroke="#4e342e"
            stroke-width="3.2"
            stroke-linecap="round"
          />
        </g>
        <g class="sleg-l">
          <line
            x1="74"
            y1="147"
            x2="47"
            y2="165"
            stroke="#4e342e"
            stroke-width="3.2"
            stroke-linecap="round"
          />
          <line
            x1="47"
            y1="165"
            x2="43"
            y2="182"
            stroke="#4e342e"
            stroke-width="3.2"
            stroke-linecap="round"
          />
        </g>
        <g class="sleg-r">
          <line
            x1="126"
            y1="147"
            x2="153"
            y2="165"
            stroke="#4e342e"
            stroke-width="3.2"
            stroke-linecap="round"
          />
          <line
            x1="153"
            y1="165"
            x2="157"
            y2="182"
            stroke="#4e342e"
            stroke-width="3.2"
            stroke-linecap="round"
          />
        </g>
      </g>
    </svg>
  );
}
