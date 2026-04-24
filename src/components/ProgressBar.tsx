import { A } from '@solidjs/router';
import { createSignal, onMount, Show } from 'solid-js';
import { toast } from 'solid-sonner';
import { bugs } from '../data/bugs';

function getVisited(): Set<string> {
  try {
    const raw = localStorage.getItem('bugs-visited');
    if (raw) return new Set(JSON.parse(raw));
  } catch {}
  return new Set();
}

export const [visitedBugs, setVisitedBugs] = createSignal<Set<string>>(new Set());

export function markVisited(id: string) {
  setVisitedBugs((prev) => {
    const next = new Set(prev);
    next.add(id);
    localStorage.setItem('bugs-visited', JSON.stringify([...next]));
    return next;
  });
}

export function initVisited() {
  setVisitedBugs(getVisited());
}

export default function ProgressBar() {
  onMount(() => {
    initVisited();
    toast.success('Welcome to Its Not Scary! Click on any bug to learn more about them.', {
      icon: '🐞',
      onAutoClose: () => {
        if (visitedBugs().size > 0) return;
        toast.info('Explore more bugs to unlock the quiz!', {
          icon: '🔓',
        });
      },
    });
  });

  const count = () => visitedBugs().size;
  const total = bugs.length;
  const pct = () => Math.round((count() / total) * 100);
  const showQuiz = () => count() >= 5;

  return (
    <div class="progress-bar-wrap">
      <Show when={showQuiz()}>
        <div class="quiz-cta">
          <A href="/quiz" class="quiz-btn">
            🧠 Take the Quiz!
          </A>
        </div>
      </Show>
      <div class="progress-label">
        You've met <strong>{count()}</strong> of <strong>{total}</strong> bugs!
      </div>
      <div
        class="progress-track"
        role="progressbar"
        aria-valuenow={count()}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        <div class="progress-fill" style={{ width: `${pct()}%` }} />
      </div>
    </div>
  );
}
