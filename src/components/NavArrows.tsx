import { A } from '@solidjs/router';
import { Show } from 'solid-js';
import type { BugInfo } from '../data/bugs';

interface Props {
  prev: BugInfo | undefined;
  next: BugInfo | undefined;
}

export default function NavArrows(props: Props) {
  return (
    <nav class="nav-arrows" aria-label="Bug navigation">
      <Show when={props.prev} fallback={<span class="nav-arrow nav-arrow--disabled" />}>
        {(prev) => (
          <A
            class="nav-arrow nav-arrow--prev"
            href={`/bug/${prev().id}`}
            title={`Previous: ${prev().name}`}
          >
            <span class="nav-arrow-icon">←</span>
            <span class="nav-arrow-label">
              {prev().emoji} {prev().name}
            </span>
          </A>
        )}
      </Show>
      <Show when={props.next} fallback={<span class="nav-arrow nav-arrow--disabled" />}>
        {(next) => (
          <A
            class="nav-arrow nav-arrow--next"
            href={`/bug/${next().id}`}
            title={`Next: ${next().name}`}
          >
            <span class="nav-arrow-label">
              {next().name} {next().emoji}
            </span>
            <span class="nav-arrow-icon">→</span>
          </A>
        )}
      </Show>
    </nav>
  );
}
