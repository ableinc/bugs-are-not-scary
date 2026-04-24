/** biome-ignore-all lint/a11y/useMediaCaption: Captions not provided */
import { createEffect, createSignal, onCleanup } from 'solid-js';
import { toast } from 'solid-sonner';

// Module-level ref tracks the single active audio element across all instances
let currentAudio: HTMLAudioElement | null = null;

interface Props {
  bugId?: string;
  audioType?: 'full' | 'description' | 'habitat' | 'diet' | 'safety';
}

export default function ReadAloudButton(props: Props) {
  const [playing, setPlaying] = createSignal(false);
  const [loading, setLoading] = createSignal(false);
  let audioRef: HTMLAudioElement | undefined;

  // Stop audio when the bug changes
  createEffect((prev: string | undefined) => {
    const id = props.bugId;
    if (prev !== undefined && prev !== id) {
      audioRef?.pause();
      if (audioRef) audioRef.currentTime = 0;
      setPlaying(false);
      setLoading(false);
    }
    return id;
  }, undefined);

  onCleanup(() => {
    if (audioRef && currentAudio === audioRef) {
      audioRef.pause();
      currentAudio = null;
    }
  });

  const handleError = () => {
    setLoading(false);
    setPlaying(false);
    if (currentAudio === audioRef) currentAudio = null;
    toast.error('Audio unavailable for this bug.', {
      icon: '⚠️',
    });
  };

  const toggle = () => {
    if (playing() || loading()) {
      audioRef?.pause();
      if (audioRef) audioRef.currentTime = 0;
      if (currentAudio === audioRef) currentAudio = null;
      setPlaying(false);
      setLoading(false);
      return;
    }
    // Stop any other currently playing audio — its onPause will reset its own state
    if (currentAudio && currentAudio !== audioRef) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = audioRef ?? null;
    setLoading(true);
    audioRef?.play().catch(handleError);
  };

  return (
    <div class="read-aloud-controls">
      <audio
        ref={audioRef}
        src={`${__CDN__}/${props.bugId}/${props.audioType}.wav`}
        preload="none"
        onPlaying={() => {
          setLoading(false);
          setPlaying(true);
        }}
        onPause={() => {
          setPlaying(false);
          setLoading(false);
        }}
        onEnded={() => {
          setPlaying(false);
          if (currentAudio === audioRef) currentAudio = null;
        }}
        onError={handleError}
      />
      <button
        type="button"
        class="read-aloud-btn"
        onClick={toggle}
        aria-label={loading() ? 'Loading audio' : playing() ? 'Stop reading' : 'Read aloud'}
        title={loading() ? 'Loading audio...' : playing() ? 'Stop reading' : 'Read aloud'}
      >
        <span class="read-aloud-icon">
          {loading() ? <span class="read-aloud-spinner" /> : playing() ? '⏹️' : '🔊'}
        </span>
        {loading() ? 'Loading...' : playing() ? 'Stop' : 'Read to Me!'}
      </button>
    </div>
  );
}
