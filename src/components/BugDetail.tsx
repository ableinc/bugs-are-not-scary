import { A, useParams } from '@solidjs/router';
import { onMount, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { getAdjacentBugs, getBugById } from '../data/bugs';
import { bugSvgMap } from '../svg';
import FunFactTooltip from './FunFactTooltip';
import NavArrows from './NavArrows';
import { markVisited } from './ProgressBar';
import ReadAloudButton from './ReadAloudButton';

export default function BugDetail() {
  const params = useParams<{ id: string }>();

  const bug = () => getBugById(params.id);
  const adjacent = () => getAdjacentBugs(params.id);
  const SvgComponent = () => bugSvgMap[params.id];

  onMount(() => {
    markVisited(params.id);
  });

  const readText = () => {
    const b = bug();
    if (!b) return '';
    return `${b.name}. ${b.tagline}. ${b.description} ${b.habitat} ${b.diet}`;
  };

  return (
    <Show
      when={bug()}
      fallback={
        <div class="not-found">
          <h2>Bug not found!</h2>
          <A href="/">← Back to all bugs</A>
        </div>
      }
    >
      {(b) => (
        <article class="bug-detail" style={{ '--bug-color': b().color }}>
          <A href="/" class="back-link">
            ← Back to all bugs
          </A>

          <div class="bug-detail-hero">
            <div class="bug-detail-svg">
              <Dynamic component={SvgComponent()} />
            </div>
            <div class="bug-detail-intro">
              <span class="bug-detail-emoji">{b().emoji}</span>
              <h1>{b().name}</h1>
              <p class="bug-detail-tagline">{b().tagline}</p>
              <ReadAloudButton text={readText()} />
            </div>
          </div>

          <div class="bug-detail-sections">
            <section class="bug-section">
              <h2>🔍 About Me</h2>
              <p>{b().description}</p>
            </section>

            <section class="bug-section">
              <h2>🏡 Where I Live</h2>
              <p>{b().habitat}</p>
            </section>

            <section class="bug-section">
              <h2>🍽️ What I Eat</h2>
              <p>{b().diet}</p>
            </section>

            <section class="bug-section">
              <FunFactTooltip facts={b().funFacts} />
            </section>
          </div>

          <NavArrows prev={adjacent().prev} next={adjacent().next} />
        </article>
      )}
    </Show>
  );
}
