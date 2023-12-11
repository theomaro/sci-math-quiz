import { writable } from "svelte/store";
import { v4 as uuidV4 } from "uuid";

export const answers = writable<Answer[]>([]);

export const addAnswer = (
  index: number,
  selectedOption: string,
  isCorrect: boolean
) => {
  let data = {
    id: uuidV4(),
    selectedOption,
    isCorrect,
  };

  answers.update((currentState) => {
    if (!currentState[index]) {
      currentState = [...currentState, data];
    } else {
      currentState[index].selectedOption = selectedOption;
      currentState[index].isCorrect = isCorrect;
    }
    return currentState;
  });
};
