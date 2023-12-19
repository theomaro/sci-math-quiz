<script lang="ts">
  import { answers } from "../../../../store";

  import Button from "../../../../components/ui/Button.svelte";
  import AnswerCorrect from "./AnswerCorrect.svelte";

  export let data: {
    chapter: Chapter;
    params: { subject: string; chapter: string };
  };
  export let hideResults: boolean;

  let totalQuestions: number = data.chapter.questions.length;
  let totalCorrectAnswer = $answers.filter(
    (answer) => answer.isCorrect === true
  ).length;
  let percent = Math.ceil((totalCorrectAnswer / totalQuestions) * 100);
  $: colorPercentage = percent < 45 ? "red" : percent > 65 ? "emerald" : "gray";
  $: textPercentage =
    percent < 45 ? "Poor" : percent > 65 ? "excellent" : "average";

  function handleRestart() {
    hideResults = true;
    answers.set([]);
  }

  function toggleAnswers(
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    let target = event.currentTarget;
    target.parentElement?.classList.toggle("show-answers");
  }

  function toggleAnswer(
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    let target = event.currentTarget;
    target.parentElement?.classList.toggle("show-answer");
  }
</script>

<article class="flex justify-between items-center">
  <div class="text-xl text-gray-600 font-medium flex items-center gap-3">
    <div
      class="flex items-center justify-center w-14 h-14 rounded-full border-4 border-{colorPercentage}-600"
    >
      <span>{totalCorrectAnswer}</span>
      <span>/{totalQuestions}</span>
    </div>

    <div>
      <h4
        class="text-sm text-{colorPercentage}-600 font-medium flex items-center gap-1"
      >
        Score
        <span
          class="inline-block w-1 h-1 mt-1 rounded-full text-lg bg-{colorPercentage}-600"
        ></span>
        <span>{percent}%</span>
      </h4>

      <p class="text-base capitalize">{textPercentage}</p>
    </div>
  </div>

  <Button
    text="play again"
    onClickHandler={handleRestart}
    styles="px-3 rounded-full py-2 capitalize bg-sky-600 text-xs text-white font-medium"
  />
</article>

<article class="group show-answers">
  <Button
    onClickHandler={toggleAnswers}
    text="answers"
    styles="capitalize font-bold text-xl text-sky-900 flex justify-between items-center w-full py-1 mb-4"
  >
    <i class="ri-arrow-down-s-line group-[.show-answers]:rotate-180"></i>
  </Button>

  <ol class="hidden group-[.show-answers]:flex flex-col text-sm">
    {#each data.chapter.questions as question, i (question.id)}
      <li
        class="group border border-b-0 last-of-type:border-b border-slate-300 first-of-type:rounded-t-md last-of-type:rounded-b-md p-4 md:px-6"
      >
        <Button
          onClickHandler={toggleAnswer}
          styles="flex w-full gap-2 text-start text-slate-700 group-[.show-answer]:border-b group-[.show-answers]:border-b-slate-300 group-[.show-answer]:pb-2"
        >
          <i
            class="font-bold text-lg -mt-1 {$answers[i].isCorrect
              ? 'ri-check-line text-green-600'
              : 'ri-close-line text-red-600'}"
          ></i>

          <p class="first-letter:capitalize">{question.text}</p>

          <i
            class="ri-arrow-down-s-line text-lg ms-auto -mt-1 group-[.show-answer]:self-start group-[.show-answer]:rotate-180"
          ></i>
        </Button>

        <div class="hidden group-[.show-answer]:block ms-2">
          <AnswerCorrect answer={$answers[i]} {question} />
        </div>
      </li>
    {/each}
  </ol>
</article>
