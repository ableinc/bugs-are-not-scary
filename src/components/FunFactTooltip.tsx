import { createSignal, Show } from 'solid-js';

interface Props {
  facts: string[];
  reset?: boolean;
}

export default function FunFactTooltip(props: Props) {
  const [open, setOpen] = createSignal(false);
  const [index, setIndex] = createSignal(0);

  const toggle = () => {
    if (!open()) {
      setIndex(Math.floor(Math.random() * props.facts.length));
    }
    setOpen(!open());
  };

  const nextFact = () => {
    setIndex((i) => (i + 1) % props.facts.length);
  };

  if (props.reset) {
    setOpen(false);
    setIndex(0);
  }

  return (
    <div class="fun-fact-container">
      <button
        type="button"
        class="fun-fact-btn"
        onClick={toggle}
        aria-expanded={open()}
        aria-label="Show fun fact"
      >
        <span class="fun-fact-icon">💡</span>
        Fun Fact!
      </button>
      <Show when={open()}>
        <div class="fun-fact-popover" role="tooltip">
          <div class="fun-fact-content">
            <p class="fun-fact-text">{props.facts[index()]}</p>
            <Show when={props.facts.length > 1}>
              <button type="button" class="fun-fact-next" onClick={nextFact}>
                Another one! ✨
              </button>
            </Show>
          </div>
          <button
            type="button"
            class="fun-fact-close"
            onClick={() => setOpen(false)}
            aria-label="Close fun fact"
          >
            ✕
          </button>
        </div>
      </Show>
    </div>
  );
}
