import { createSignal, onMount } from 'solid-js';

export default function DarkModeToggle() {
  const [dark, setDark] = createSignal(false);

  onMount(() => {
    const saved = localStorage.getItem('bugs-theme');
    if (saved === 'dark') {
      setDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  });

  const toggle = () => {
    const next = !dark();
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('bugs-theme', next ? 'dark' : 'light');
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
