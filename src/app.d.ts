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
}

export {};
