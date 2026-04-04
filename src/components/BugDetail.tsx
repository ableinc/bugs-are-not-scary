import { A, useParams } from '@solidjs/router';
import { createEffect, createSignal, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { type BugInfo, getAdjacentBugs, getBugById } from '../data/bugs';
import { bugSvgMap } from '../svg';
import FunFactTooltip from './FunFactTooltip';
import NavArrows from './NavArrows';
import { markVisited } from './ProgressBar';
import ReadAloudButton from './ReadAloudButton';

export default function BugDetail() {
  const params = useParams<{ id: string }>();
  const [bug, setBug] = createSignal<BugInfo | undefined>(undefined);
  const adjacent = () => getAdjacentBugs(params.id);
  const SvgComponent = () => bugSvgMap[params.id];

  createEffect(() => {
    setBug(getBugById(params.id));
    markVisited(params.id);
  });

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
              <span class="bug-detail-emoji">{b().region}</span>
              <h1>{b().name}</h1>
              <p class="bug-detail-tagline">{b().tagline}</p>
              <ReadAloudButton useCdn={true} bugId={b().id} audioType="full" />
            </div>
          </div>

          <div class="bug-detail-sections">
            <section class="bug-section">
              <h2>🔍 About Me</h2>
              <p>{b().description}</p>
              <ReadAloudButton
                text={b().description}
                simple={true}
                useCdn={true}
                bugId={b().id}
                audioType="description"
              />
            </section>

            <section class="bug-section">
              <h2>🏡 Where I Live</h2>
              <p>{b().habitat}</p>
              <ReadAloudButton
                text={b().habitat}
                simple={true}
                useCdn={true}
                bugId={b().id}
                audioType="habitat"
              />
            </section>

            <section class="bug-section">
              <h2>🍽️ What I Eat</h2>
              <p>{b().diet}</p>
              <ReadAloudButton
                text={b().diet}
                simple={true}
                useCdn={true}
                bugId={b().id}
                audioType="diet"
              />
            </section>

            <Show when={b().useCaution}>
              <section class="bug-section">
                <h2>⚠️ Safety</h2>
                <p>{b().safety}</p>
                <ReadAloudButton
                  text={b().safety}
                  simple={true}
                  useCdn={true}
                  bugId={b().id}
                  audioType="safety"
                />
              </section>
            </Show>

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
