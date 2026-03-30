import { A } from '@solidjs/router';
import { For, Show } from 'solid-js';
import { bugs } from '../data/bugs';
import BugCard from './BugCard';
import { visitedBugs } from './ProgressBar';

export default function BugGrid() {
  const showQuiz = () => visitedBugs().size >= 5;

  return (
    <div class="bug-grid-page">
      <div class="bug-grid-intro">
        <h1>🐛 Bugs Are Not Scary! 🦋</h1>
        <p class="bug-grid-subtitle">
          Bugs are amazing little creatures that share our world. Click on a bug to learn all about
          it!
        </p>
      </div>

      <div class="bug-grid">
        <For each={bugs}>{(bug) => <BugCard bug={bug} />}</For>
      </div>

      <Show when={showQuiz()}>
        <div class="quiz-cta">
          <A href="/quiz" class="quiz-btn">
            🧠 Take the Quiz!
          </A>
        </div>
      </Show>
    </div>
  );
}
