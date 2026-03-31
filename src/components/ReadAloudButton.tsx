/** biome-ignore-all lint/a11y/useMediaCaption: Captions not provided */
import { createSignal, onCleanup, onMount } from 'solid-js';

interface Props {
  text: string;
  simple?: boolean;
  useCdn?: boolean;
  bugId?: string;
  audioType?: 'full' | 'description' | 'habitat' | 'diet';
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

  if (props.simple && props.useCdn) {
    const url = `${__CDN__}/${props.bugId}/${props.audioType}.wav`;
    let audioRef!: HTMLAudioElement;
    const [playing, setPlaying] = createSignal(false);
    const toggle = () => {
      if (playing()) {
        audioRef.pause();
        audioRef.currentTime = 0;
        setPlaying(false);
      } else {
        audioRef.play();
        setPlaying(true);
      }
    };
    return (
      <>
        <audio ref={audioRef} src={url} crossorigin="anonymous" preload="none" onEnded={() => setPlaying(false)} />
        <button
          type="button"
          class="read-aloud-btn simple"
          onClick={toggle}
          aria-label={playing() ? 'Stop reading' : 'Read aloud'}
          title={playing() ? 'Stop reading' : 'Read aloud'}
        >
          <span class="read-aloud-icon">{playing() ? '⏹️' : '🔊'}</span>
        </button>
      </>
    );
  }

  if (props.useCdn) {
    const url = `${__CDN__}/${props.bugId}/${props.audioType}.wav`;
    let audioRef!: HTMLAudioElement;
    const [playing, setPlaying] = createSignal(false);
    const toggle = () => {
      if (playing()) {
        audioRef.pause();
        audioRef.currentTime = 0;
        setPlaying(false);
      } else {
        audioRef.play();
        setPlaying(true);
      }
    };
    return (
      <div class="read-aloud-controls">
        <audio ref={audioRef} src={url} crossorigin="anonymous" preload="none" onEnded={() => setPlaying(false)} />
        <button
          type="button"
          class="read-aloud-btn"
          onClick={toggle}
          aria-label={playing() ? 'Stop reading' : 'Read aloud'}
          title={playing() ? 'Stop reading' : 'Read aloud'}
        >
          <span class="read-aloud-icon">{playing() ? '⏹️' : '🔊'}</span>
          {playing() ? 'Stop' : 'Read to Me!'}
        </button>
      </div>
    );
  }

  if (props.simple) {
    return (
      <button
        type="button"
        class="read-aloud-btn simple"
        onClick={speak}
        disabled={noVoices()}
        aria-label={speaking() ? 'Stop reading' : 'Read aloud'}
        title={noVoices() ? 'Voices not available' : speaking() ? 'Stop reading' : 'Read aloud'}
      >
        <span class="read-aloud-icon">{speaking() ? '⏹️' : '🔊'}</span>
      </button>
    );
  }

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
        hidden={props.useCdn}
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
