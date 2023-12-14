<script lang="ts">
  import { addAnswer, answers } from "../../../../store";

  import Button from "../../../../components/ui/Button.svelte";
  import ProgressBar from "./ProgressBar.svelte";
  import QuestionText from "./QuestionText.svelte";
  import Timer from "../../../../components/ui/Timer.svelte";

  export let data: {
    chapter: Chapter;
    params: { subject: string; chapter: string };
  };
  export let hideResults: boolean;

  let currentQuestionIndex: number = 0;
  let totalQuestions: number = data.chapter.questions.length;
  let showNextQuestion: boolean = true;
  let showPrevQuestion: boolean = false;
  let selectedOption: string | null;
  let canStartPlay: boolean = false;

  $: question = data.chapter.questions[currentQuestionIndex];
  $: duration = question.duration;

  function changeSelectedOption(label: string): void {
    selectedOption = label;
    addAnswer(
      currentQuestionIndex,
      selectedOption,
      question.answer === selectedOption
    );
  }

  function handleNext() {
    if (!selectedOption) return;
    if (currentQuestionIndex === totalQuestions - 1) showNextQuestion = false;

    currentQuestionIndex++;
    showPrevQuestion = true;
    selectedOption = null;
  }

  function handleSubmit() {
    hideResults = false;
  }

  function handlePrev() {
    currentQuestionIndex--;
    showNextQuestion = true;

    if (currentQuestionIndex === 0) showPrevQuestion = false;
    selectedOption = $answers[currentQuestionIndex].selectedOption;
  }

  const startPlaying = () => {
    if (canStartPlay) {
      selectedOption = "";
      currentQuestionIndex = 0;
      showNextQuestion = true;
    }
    canStartPlay = true;
  };

  const formatTimer = (time: number, min: number = 2) => {
    return time.toLocaleString("en-Us", {
      minimumIntegerDigits: min,
      useGrouping: false,
    });
  };
</script>

{#if canStartPlay}
  <section>
    <div class="-mt-5 mb-5">
      <Timer bind:canStartPlay {formatTimer} {duration} />
    </div>

    <div class="flex justify-between gap-8 mb-5 relative">
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
            styles={`border border-sky-900 rounded-lg py-1.5 px-4 text-sm w-full flex justify-between text-start cursor-pointer text-sky-900 capitalize ${
              selectedOption === option.label ? "text-sky-600 bg-sky-100" : ""
            }`}
          />
        </li>
      {/each}
    </ul>

    <div class="flex justify-center mt-8 sm:justify-start">
      <Button
        text={`${
          currentQuestionIndex < totalQuestions - 1 ? "next" : "finish"
        }`}
        onClickHandler={currentQuestionIndex < totalQuestions - 1
          ? handleNext
          : handleSubmit}
        styles="rounded-full py-2 first-letter:uppercase bg-slate-600 px-4 sm:px-0 w-1/3 sm:w-1/6 text-white"
      />
    </div>
  </section>
{:else}
  <section class="flex flex-col space-y-16">
    <div class="space-y-1">
      <p>
        Duration: {formatTimer(duration.minutes)}:{formatTimer(
          duration.seconds
        )}
      </p>
      <p>Total question: {totalQuestions}</p>
      <p>Difficult level: Beginner</p>
    </div>
    <Button
      onClickHandler={startPlaying}
      text="Start Quiz"
      styles="bg-emerald-600 text-white rounded-lg px-4 py-2"
    />
  </section>
{/if}
