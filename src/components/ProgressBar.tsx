import { createSignal, onMount } from 'solid-js';
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
  });

  const count = () => visitedBugs().size;
  const total = bugs.length;
  const pct = () => Math.round((count() / total) * 100);

  return (
    <div class="progress-bar-wrap">
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
