import bugInfo from './bugs.json';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface BugInfo {
  id: string;
  name: string;
  emoji: string;
  color: string;
  tagline: string;
  description: string;
  habitat: string;
  diet: string;
  funFacts: string[];
  quizQuestion: QuizQuestion;
  useCaution: boolean;
  region: string;
  safety: string;
}

export const bugs: BugInfo[] = bugInfo;

export function getBugById(id: string): BugInfo | undefined {
  return bugs.find((bug) => bug.id === id);
}

export function getAdjacentBugs(id: string): {
  prev: BugInfo | undefined;
  next: BugInfo | undefined;
} {
  const index = bugs.findIndex((bug) => bug.id === id);
  return {
    prev: index > 0 ? bugs[index - 1] : undefined,
    next: index < bugs.length - 1 ? bugs[index + 1] : undefined,
  };
}
