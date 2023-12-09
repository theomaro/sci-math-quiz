<script lang="ts">
  import Button from "../../../../components/ui/Button.svelte";
  import ProgressBar from "./ProgressBar.svelte";
  import QuestionText from "./QuestionText.svelte";

  export let currentQuestionIndex: number;
  export let totalQuestions: number;
  export let showPrevQuestion: boolean;
  export let handleNext: () => void;
  export let handlePrev: () => void;
  export let changeSelectedOption: (label: string) => void;
  export let question: Question;
  export let selectedOption: string | null;
</script>

<section class="quizzes-container p-8 max-w-3xl mx-auto flex flex-col">
  <div class="flex justify-between gap-8 mb-5">
    <ProgressBar {currentQuestionIndex} {totalQuestions} />

    {#if showPrevQuestion}
      <Button
        styles="h-8 w-8 bg-gray-500 text-gray-100 shadow-xl rounded-lg cursor-pointer"
        onClickHandler={handlePrev}
      >
        <i class="ri-arrow-left-line"></i>
      </Button>
    {/if}
  </div>

  <div class="h-32">
    <QuestionText {question} />
  </div>

  <ul class="flex flex-col space-y-5">
    {#each question.options as option (option.id)}
      <li>
        <Button
          text={option.text}
          onClickHandler={() => changeSelectedOption(option.label)}
          styles={`border border-sky-600 rounded-lg py-1.5 px-4 text-sm w-full flex justify-between text-start cursor-pointer ${
            selectedOption === option.label
              ? "ring-1 ring-sky-600 text-sky-800"
              : ""
          }`}
        />
      </li>
    {/each}
  </ul>
  <div class="flex justify-center mt-8 sm:justify-start">
    <Button
      text="continue"
      onClickHandler={handleNext}
      styles="rounded-full py-2 first-letter:uppercase bg-slate-600 px-4 sm:px-0 w-1/3 sm:w-1/6 text-white"
    />
  </div>
</section>
