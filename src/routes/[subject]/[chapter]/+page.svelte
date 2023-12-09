<script lang="ts">
  import Button from "../../../components/ui/Button.svelte";
  import ProgressBar from "./components/ProgressBar.svelte";
  import QuestionText from "./components/QuestionText.svelte";

  export let data: {
    chapter: Chapter;
    params: { subject: string; chapter: string };
  };

  let currentQuestionIndex: number = 0;
  let totalQuestions: number = data.chapter.questions.length;
  let showNextQuestion: boolean = true;
  let showPrevQuestion: boolean = false;

  $: question = data.chapter.questions[currentQuestionIndex];

  function handleNext() {
    currentQuestionIndex++;
    showPrevQuestion = true;

    if (currentQuestionIndex === totalQuestions - 1) showNextQuestion = false;
  }

  function handlePrev() {
    currentQuestionIndex--;
    showNextQuestion = true;

    if (currentQuestionIndex === 0) showPrevQuestion = false;
  }

  function handleSubmit() {
    //
  }

  function handleSelectedOption(label: string): void {
    console.log(label);
  }
</script>

<svelte:head>
  <title>{data.chapter.title.toUpperCase()}</title>
</svelte:head>

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
          onClickHandler={() => handleSelectedOption(option.label)}
          styles="border border-sky-600 rounded-lg py-1.5 px-4 text-sm w-full flex justify-between cursor-pointer"
        >
          <input type="radio" name="" id="" />
        </Button>
      </li>
    {/each}
  </ul>

  <div class="flex justify-center mt-8 sm:justify-start">
    {#if showNextQuestion}
      <Button
        text="continue"
        onClickHandler={handleNext}
        styles="rounded-full py-2 first-letter:uppercase bg-slate-600 px-4 sm:px-0 w-1/3 sm:w-1/6 text-white"
      />
    {:else}
      <Button
        text="submit"
        onClickHandler={handleSubmit}
        styles="rounded-full py-2 first-letter:uppercase bg-slate-600 px-4 sm:px-0 w-1/3 sm:w-1/6 text-white"
      />
    {/if}
  </div>
</section>
