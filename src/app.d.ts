// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  interface Subject {
    id: string;
    code: string;
    name: string;
    imageUrl: string;
    chapters: Chapter[];
  }

  interface Chapter {
    id: number;
    title: string;
    questions: Question[];
  }

  interface Question {
    id: number;
    text: string;
    answer: string;
    duration: Duration;
    options: Option[];
    notes: string;
    createAt: string;
    modifiedAt: string;
  }

  interface Option {
    id: string;
    label: string;
    text: string;
  }

  interface Duration {
    minutes: number;
    seconds: number;
  }

  interface Answer {
    id: string;
    selectedOption: string;
    isCorrect: boolean | null;
  }
}

export {};
