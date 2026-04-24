type KEY = 'bugs-theme' | 'bugs-visited' | 'app-version';

export function getStorageItem<T>(key: KEY): T | null {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch {
    return null;
  }
}

export function setStorageItem(key: KEY, value: string | string[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore
  }
}

export function removeStorageItem(key: KEY): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore
  }
}

export function clearStorage(): void {
  try {
    localStorage.clear();
  } catch {
    // Ignore
  }
}
