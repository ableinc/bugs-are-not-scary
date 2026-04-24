import { For } from 'solid-js';
import { bugs } from '../data/bugs';
import BugCard from './BugCard';

export default function BugGrid() {
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
    </div>
  );
}
