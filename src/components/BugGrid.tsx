import { For, onMount } from 'solid-js';
import { bugs } from '../data/bugs';
import { clearStorage, getStorageItem, setStorageItem } from '../lib/storage';
import BugCard from './BugCard';

export default function BugGrid() {
  onMount(() => {
    // Ensure storage is cleared when app version changes to prevent stale data issues
    const appVersionFromStorage = getStorageItem<string>('app-version');
    if (appVersionFromStorage !== __APP_VERSION__) {
      clearStorage();
      setStorageItem('app-version', __APP_VERSION__);
    }
  });

  return (
    <div class="bug-grid-page">
      <div class="bug-grid-intro">
        <h1>Bugs Are Not Scary! 🐛</h1>
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
