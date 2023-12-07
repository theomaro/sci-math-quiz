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

    options: Option[];
  }

  interface Option {
    id: string;
    label: string;
    text: string;
  }
}

export {};
