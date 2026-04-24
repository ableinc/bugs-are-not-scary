import { A, useLocation } from '@solidjs/router';
import { createSignal, onCleanup, onMount, Show } from 'solid-js';
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
  const [fabBottom, setFabBottom] = createSignal('1.5rem');
  const location = useLocation();

  onMount(() => {
    initVisited();
    toast.success('Welcome to Its Not Scary!', {
      description: 'Click on any bug to learn more about them.',
      icon: '🐞',
      onAutoClose: () => {
        if (visitedBugs().size > 4) return;
        toast.info('Explore more bugs!', {
          description: 'Take the quiz after visiting 5 different bugs.',
          icon: '🔓',
        });
      },
    });

    const footer = document.querySelector('.app-footer') as HTMLElement | null;
    if (!footer) return;

    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFabBottom(`${entry.intersectionRect.height + 24}px`);
        } else {
          setFabBottom('1.5rem');
        }
      },
      { threshold: thresholds },
    );

    observer.observe(footer);
    onCleanup(() => observer.disconnect());
  });

  const count = () => visitedBugs().size;
  const total = bugs.length;
  const pct = () => Math.round((count() / total) * 100);
  const showQuiz = () => count() >= 5;

  return (
    <>
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
      <Show when={showQuiz() && location.pathname !== '/quiz'}>
        <A href="/quiz" class="quiz-fab" style={{ bottom: fabBottom() }} aria-label="Take the Quiz">
          🧠
        </A>
      </Show>
    </>
  );
}
