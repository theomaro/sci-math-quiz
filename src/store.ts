import { writable } from "svelte/store";
import { v4 as uuidV4 } from "uuid";

export const answers = writable<Answer[]>([]);

export const addAnswer = (selectedOption: string, isCorrect: boolean) => {
  let data = {
    id: uuidV4(),
    selectedOption,
    isCorrect,
  };

  answers.update((currentState) => {
    return [...currentState, data];
  });
};
