import { createSignal, onMount } from 'solid-js';
import { getStorageItem, setStorageItem } from '../lib/storage';

export default function DarkModeToggle() {
  const [dark, setDark] = createSignal(false);

  onMount(() => {
    const saved = getStorageItem<string>('bugs-theme');
    if (saved === 'dark') {
      setDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  });

  const toggle = () => {
    const next = !dark();
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    setStorageItem('bugs-theme', next ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      class="dark-mode-toggle"
      onClick={toggle}
      aria-label={dark() ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark() ? 'Light mode' : 'Dark mode'}
    >
      <span class="toggle-icon">{dark() ? '☀️' : '🌙'}</span>
    </button>
  );
}
