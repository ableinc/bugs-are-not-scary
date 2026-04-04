/** biome-ignore-all lint/a11y/useMediaCaption: Captions not provided */
import { createEffect, createSignal, onCleanup, onMount } from 'solid-js';

interface Props {
  text?: string;
  simple?: boolean;
  useCdn?: boolean;
  bugId?: string;
  audioType?: 'full' | 'description' | 'habitat' | 'diet';
}

export default function ReadAloudButton(props: Props) {
  const [playing, setPlaying] = createSignal(false);
  const [voices, setVoices] = createSignal<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = createSignal(0);
  let audioRef: HTMLAudioElement | undefined;

  createEffect((prev: string | undefined) => {
    const id = props.bugId;
    if (prev !== undefined && prev !== id) {
      audioRef?.pause();
      if (audioRef) audioRef.currentTime = 0;
      window.speechSynthesis.cancel();
      setPlaying(false);
    }
    return id;
  }, undefined);

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
      setPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(props.text);
    utterance.voice = voices()[selectedVoiceIndex()] ?? null;
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);

    window.speechSynthesis.speak(utterance);
    setPlaying(true);
  };

  const noVoices = () => voices().length === 0;

  if (props.simple && props.useCdn) {
    const toggle = () => {
      if (playing()) {
        audioRef?.pause();
        if (audioRef) audioRef.currentTime = 0;
        setPlaying(false);
      } else {
        audioRef?.play();
        setPlaying(true);
      }
    };
    return (
      <>
        <audio ref={audioRef} src={`${__CDN__}/${props.bugId}/${props.audioType}.wav`} preload="none" onEnded={() => setPlaying(false)} />
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
    const toggle = () => {
      if (playing()) {
        audioRef?.pause();
        if (audioRef) audioRef.currentTime = 0;
        setPlaying(false);
      } else {
        audioRef?.play();
        setPlaying(true);
      }
    };
    return (
      <div class="read-aloud-controls">
        <audio ref={audioRef} src={`${__CDN__}/${props.bugId}/${props.audioType}.wav`} preload="none" onEnded={() => setPlaying(false)} />
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
        aria-label={playing() ? 'Stop reading' : 'Read aloud'}
        title={noVoices() ? 'Voices not available' : playing() ? 'Stop reading' : 'Read aloud'}
      >
        <span class="read-aloud-icon">{playing() ? '⏹️' : '🔊'}</span>
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
        aria-label={playing() ? 'Stop reading' : 'Read aloud'}
        title={noVoices() ? 'Voices not available' : playing() ? 'Stop reading' : 'Read aloud'}
      >
        <span class="read-aloud-icon">{playing() ? '⏹️' : '🔊'}</span>
        {playing() ? 'Stop' : 'Read to Me!'}
      </button>

      <select
        class="voice-select"
        disabled={noVoices() || playing()}
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
