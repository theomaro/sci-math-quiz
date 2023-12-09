<script lang="ts">
  import { addAnswer } from "../../../store";

  import Quiz from "./components/Quiz.svelte";
  import ResultsSummary from "./components/ResultsSummary.svelte";

  export let data: {
    chapter: Chapter;
    params: { subject: string; chapter: string };
  };

  let currentQuestionIndex: number = 0;
  let totalQuestions: number = data.chapter.questions.length;
  let showNextQuestion: boolean = true;
  let showPrevQuestion: boolean = false;
  let selectedOption: string | null;

  $: question = data.chapter.questions[currentQuestionIndex];

  function handleNext() {
    if (!selectedOption) return;

    if (currentQuestionIndex === totalQuestions - 1) {
      showNextQuestion = false;
    } else currentQuestionIndex++;

    showPrevQuestion = true;
    selectedOption = null;
  }

  function handlePrev() {
    currentQuestionIndex--;
    showNextQuestion = true;

    if (currentQuestionIndex === 0) showPrevQuestion = false;
  }

  function changeSelectedOption(label: string): void {
    selectedOption = label;
    addAnswer(selectedOption, question.answer === selectedOption);
  }
</script>

<svelte:head>
  <title>{data.chapter.title.toUpperCase()}</title>
</svelte:head>
{#if showNextQuestion}
  <Quiz
    {question}
    {currentQuestionIndex}
    {totalQuestions}
    {selectedOption}
    {showPrevQuestion}
    {handleNext}
    {handlePrev}
    {changeSelectedOption}
  />
{:else}
  <ResultsSummary />
{/if}
