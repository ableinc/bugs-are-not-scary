import { A } from '@solidjs/router';
import { createSignal, For, Show } from 'solid-js';
import { bugs, type QuizQuestion } from '../data/bugs';

function pickQuestions(count: number): (QuizQuestion & { bugName: string })[] {
  const shuffled = [...bugs].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((b) => ({
    ...b.quizQuestion,
    bugName: b.name,
  }));
}

export default function Quiz() {
  const [questions] = createSignal(pickQuestions(5));
  const [current, setCurrent] = createSignal(0);
  const [selected, setSelected] = createSignal<number | null>(null);
  const [correct, setCorrect] = createSignal(0);
  const [showResult, setShowResult] = createSignal(false);
  const [answered, setAnswered] = createSignal(false);

  const q = () => questions()[current()];

  const handleAnswer = (index: number) => {
    if (answered()) return;
    setSelected(index);
    setAnswered(true);
    if (index === q().correctIndex) {
      setCorrect((c) => c + 1);
    }
  };

  const nextQuestion = () => {
    if (current() < questions().length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const retry = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setCorrect(0);
    setShowResult(false);
  };

  const isCorrectAnswer = () => selected() === q().correctIndex;

  const getMessage = () => {
    const score = correct();
    if (score === 5) return "🌟 AMAZING! You're a Bug Expert! 🌟";
    if (score >= 4) return '🎉 Awesome job! You really know your bugs!';
    if (score >= 3) return "👏 Great work! You're learning a lot!";
    if (score >= 2) return '😊 Good try! Keep exploring to learn more!';
    return '🌱 Nice start! Visit more bugs and try again!';
  };

  return (
    <div class="quiz-page">
      <A href="/" class="back-link">
        ← Back to all bugs
      </A>
      <h1>🧠 Bug Quiz!</h1>
      <p class="quiz-subtitle">Let's see what you've learned about our bug friends!</p>

      <Show
        when={!showResult()}
        fallback={
          <div class="quiz-result">
            <div class="quiz-score">
              <span class="quiz-score-num">{correct()}</span>
              <span class="quiz-score-of">of</span>
              <span class="quiz-score-num">{questions().length}</span>
            </div>
            <p class="quiz-message">{getMessage()}</p>
            <div class="quiz-result-actions">
              <button type="button" class="quiz-retry-btn" onClick={retry}>
                Try Again! 🔄
              </button>
              <A href="/" class="quiz-home-btn">
                Back to Bugs 🐛
              </A>
            </div>
          </div>
        }
      >
        <div class="quiz-question-card">
          <div class="quiz-progress">
            Question {current() + 1} of {questions().length}
          </div>
          <p class="quiz-bug-name">About: {q().bugName}</p>
          <h2 class="quiz-question-text">{q().question}</h2>

          <div class="quiz-options">
            <For each={q().options}>
              {(option, i) => (
                <button
                  type="button"
                  class="quiz-option"
                  classList={{
                    'quiz-option--selected': selected() === i(),
                    'quiz-option--correct': answered() && i() === q().correctIndex,
                    'quiz-option--wrong':
                      answered() && selected() === i() && i() !== q().correctIndex,
                  }}
                  onClick={() => handleAnswer(i())}
                  disabled={answered()}
                >
                  {option}
                </button>
              )}
            </For>
          </div>

          <Show when={answered()}>
            <div
              class="quiz-feedback"
              classList={{
                'quiz-feedback--correct': isCorrectAnswer(),
                'quiz-feedback--wrong': !isCorrectAnswer(),
              }}
            >
              {isCorrectAnswer()
                ? "🎉 That's right! Great job!"
                : '😊 Almost! The right answer is highlighted in green.'}
            </div>
            <button type="button" class="quiz-next-btn" onClick={nextQuestion}>
              {current() < questions().length - 1 ? 'Next Question →' : 'See My Score! 🏆'}
            </button>
          </Show>
        </div>
      </Show>
    </div>
  );
}
