export default function TermiteSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="termite-title"
      class="bug-svg"
    >
      <title id="termite-title">A hardworking termite</title>
      <style>{`
        @keyframes termite-march { 0%,100%{transform:translateX(0)} 50%{transform:translateX(4px)} }
        @keyframes termite-leg-l { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(10deg)} }
        @keyframes termite-leg-r { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-10deg)} }
        .termite-g { animation: termite-march 1.8s ease-in-out infinite; }
        .tleg-l { animation: termite-leg-l 0.7s ease-in-out infinite; transform-origin: top; }
        .tleg-r { animation: termite-leg-r 0.7s ease-in-out infinite 0.35s; transform-origin: top; }
      `}</style>
      <g class="termite-g">
        {/* Abdomen – large and bulbous, pale cream */}
        <ellipse cx="100" cy="149" rx="33" ry="39" fill="#ede0d4" />
        <ellipse
          cx="100"
          cy="149"
          rx="33"
          ry="39"
          fill="none"
          stroke="#bcaaa4"
          stroke-width="1.8"
        />
        {/* Abdomen segment arcs */}
        <path
          d="M71,128 Q100,123 129,128"
          fill="none"
          stroke="#bcaaa4"
          stroke-width="1"
          opacity="0.6"
        />
        <path
          d="M69,143 Q100,137 131,143"
          fill="none"
          stroke="#bcaaa4"
          stroke-width="1"
          opacity="0.6"
        />
        <path
          d="M69,158 Q100,152 131,158"
          fill="none"
          stroke="#bcaaa4"
          stroke-width="1"
          opacity="0.6"
        />
        <path
          d="M73,172 Q100,167 127,172"
          fill="none"
          stroke="#bcaaa4"
          stroke-width="1"
          opacity="0.6"
        />

        {/* Thorax */}
        <ellipse cx="100" cy="103" rx="18" ry="18" fill="#f5ede5" />
        <ellipse
          cx="100"
          cy="103"
          rx="18"
          ry="18"
          fill="none"
          stroke="#bcaaa4"
          stroke-width="1.5"
        />

        {/* Head – large, round */}
        <circle cx="100" cy="66" r="30" fill="#f5e6d8" />
        <circle cx="100" cy="66" r="30" fill="none" stroke="#bcaaa4" stroke-width="2" />

        {/* Eyes */}
        <circle cx="84" cy="60" r="7.5" fill="white" />
        <circle cx="116" cy="60" r="7.5" fill="white" />
        <circle cx="86" cy="60" r="4.2" fill="#5d4037" />
        <circle cx="118" cy="60" r="4.2" fill="#5d4037" />
        <circle cx="87" cy="58.5" r="1.7" fill="white" />
        <circle cx="119" cy="58.5" r="1.7" fill="white" />

        {/* Smile */}
        <path
          d="M88 80 Q100 89 112 80"
          fill="none"
          stroke="#8d6e63"
          stroke-width="2.8"
          stroke-linecap="round"
        />

        {/* Mandibles */}
        <path
          d="M85 89 Q76 98 72 94"
          fill="none"
          stroke="#8d6e63"
          stroke-width="3.5"
          stroke-linecap="round"
        />
        <path
          d="M115 89 Q124 98 128 94"
          fill="none"
          stroke="#8d6e63"
          stroke-width="3.5"
          stroke-linecap="round"
        />

        {/* Beaded antennae */}
        <path
          d="M83 38 Q76 26 70 19"
          fill="none"
          stroke="#d7c4b5"
          stroke-width="2"
          stroke-linecap="round"
        />
        <circle cx="77" cy="30" r="3.2" fill="#d7c4b5" />
        <circle cx="70" cy="19" r="3.8" fill="#d7c4b5" />
        <path
          d="M117 38 Q124 26 130 19"
          fill="none"
          stroke="#d7c4b5"
          stroke-width="2"
          stroke-linecap="round"
        />
        <circle cx="123" cy="30" r="3.2" fill="#d7c4b5" />
        <circle cx="130" cy="19" r="3.8" fill="#d7c4b5" />

        {/* Cheeks */}
        <circle cx="83" cy="67" r="6" fill="#f8cba8" opacity="0.5" />
        <circle cx="117" cy="67" r="6" fill="#f8cba8" opacity="0.5" />

        {/* Legs – 3 pairs */}
        <g class="tleg-l">
          <line
            x1="85"
            y1="97"
            x2="56"
            y2="109"
            stroke="#d7c4b5"
            stroke-width="3.2"
            stroke-linecap="round"
          />
          <line
            x1="56"
            y1="109"
            x2="47"
            y2="125"
            stroke="#d7c4b5"
            stroke-width="3.2"
            stroke-linecap="round"
          />
        </g>
        <g class="tleg-r">
          <line
            x1="115"
            y1="97"
            x2="144"
            y2="109"
            stroke="#d7c4b5"
            stroke-width="3.2"
            stroke-linecap="round"
          />
          <line
            x1="144"
            y1="109"
            x2="153"
            y2="125"
            stroke="#d7c4b5"
            stroke-width="3.2"
            stroke-linecap="round"
          />
        </g>
        <g class="tleg-r">
          <line
            x1="84"
            y1="108"
            x2="53"
            y2="124"
            stroke="#d7c4b5"
            stroke-width="3.2"
            stroke-linecap="round"
          />
          <line
            x1="53"
            y1="124"
            x2="44"
            y2="142"
            stroke="#d7c4b5"
            stroke-width="3.2"
            stroke-linecap="round"
          />
        </g>
        <g class="tleg-l">
          <line
            x1="116"
            y1="108"
            x2="147"
            y2="124"
            stroke="#d7c4b5"
            stroke-width="3.2"
            stroke-linecap="round"
          />
          <line
            x1="147"
            y1="124"
            x2="156"
            y2="142"
            stroke="#d7c4b5"
            stroke-width="3.2"
            stroke-linecap="round"
          />
        </g>
        <g class="tleg-l">
          <line
            x1="81"
            y1="140"
            x2="54"
            y2="158"
            stroke="#d7c4b5"
            stroke-width="3.2"
            stroke-linecap="round"
          />
          <line
            x1="54"
            y1="158"
            x2="48"
            y2="175"
            stroke="#d7c4b5"
            stroke-width="3.2"
            stroke-linecap="round"
          />
        </g>
        <g class="tleg-r">
          <line
            x1="119"
            y1="140"
            x2="146"
            y2="158"
            stroke="#d7c4b5"
            stroke-width="3.2"
            stroke-linecap="round"
          />
          <line
            x1="146"
            y1="158"
            x2="152"
            y2="175"
            stroke="#d7c4b5"
            stroke-width="3.2"
            stroke-linecap="round"
          />
        </g>
      </g>
    </svg>
  );
}
