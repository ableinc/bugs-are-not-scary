import { createSignal, onCleanup, onMount } from 'solid-js';

interface Props {
  text: string;
}

export default function ReadAloudButton(props: Props) {
  const [speaking, setSpeaking] = createSignal(false);
  const [voices, setVoices] = createSignal<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = createSignal(0);

  const loadVoices = () => {
    const available = window.speechSynthesis.getVoices();
    if (available.length === 0) return;
    setVoices(available);

    const locale = navigator.language; // e.g. "en-US"
    const lang = locale.split('-')[0]; // e.g. "en"

    // Preference order: exact locale > same language > Natural > Google > first
    const exactLocale = available.findIndex((v) => v.lang === locale);
    const sameLang = available.findIndex((v) => v.lang.startsWith(lang));
    const natural = available.findIndex((v) => v.name.includes('Natural'));
    const google = available.findIndex((v) => v.name.includes('Google'));

    const best =
      exactLocale !== -1
        ? exactLocale
        : sameLang !== -1
          ? sameLang
          : natural !== -1
            ? natural
            : google !== -1
              ? google
              : 0;

    setSelectedVoiceIndex(best);
  };

  onMount(() => {
    loadVoices();
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
  });

  onCleanup(() => {
    window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
    window.speechSynthesis.cancel();
  });

  const speak = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(props.text);
    utterance.voice = voices()[selectedVoiceIndex()] ?? null;
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  const noVoices = () => voices().length === 0;

  return (
    <div class="read-aloud-controls">
      <button
        type="button"
        class="read-aloud-btn"
        onClick={speak}
        disabled={noVoices()}
        aria-label={speaking() ? 'Stop reading' : 'Read aloud'}
        title={noVoices() ? 'Voices not available' : speaking() ? 'Stop reading' : 'Read aloud'}
      >
        <span class="read-aloud-icon">{speaking() ? '⏹️' : '🔊'}</span>
        {speaking() ? 'Stop' : 'Read to Me!'}
      </button>

      <select
        class="voice-select"
        disabled={noVoices() || speaking()}
        aria-label="Select voice"
        value={selectedVoiceIndex()}
        onChange={(e) => setSelectedVoiceIndex(Number(e.currentTarget.value))}
      >
        {noVoices() ? (
          <option>No voices available</option>
        ) : (
          voices().map((v, i) => (
            <option value={i}>
              {v.name}
              {v.localService ? ' ' : ' 🌐'}
            </option>
          ))
        )}
      </select>
    </div>
  );
}
