import { A } from '@solidjs/router';

export default function NotFound() {
  return (
    <div class="not-found">
      <span class="not-found-emoji">🐛</span>
      <h1>404 — Page Not Found</h1>
      <p class="not-found-text">Oops! This bug crawled away and we can't find it.</p>
      <A href="/" class="not-found-link">
        ← Back to all bugs
      </A>
    </div>
  );
}
