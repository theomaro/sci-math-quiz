<script lang="ts">
  import { addAnswer, answers } from "../../../../store";

  import Button from "../../../../components/ui/Button.svelte";
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
  $: totalDuration = (): Duration => {
    let minutes = data.chapter.questions
      .map((question) => question.duration.minutes)
      .reduce((a, x) => a + x);
    let seconds = data.chapter.questions
      .map((question) => question.duration.seconds)
      .reduce((a, x) => a + x);

    let setTime = seconds * 1000 + minutes * 60 * 1000;
    // convert remaining time from milliseconds into mins and secs
    minutes = Math.floor((setTime / (1000 * 60)) % 60);
    seconds = Math.floor((setTime / 1000) % 60);

    return { minutes, seconds };
  };

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
      <Timer bind:canStartPlay {formatTimer} {totalDuration} />
    </div>

    <div class="flex justify-between gap-8 mb-5 relative">
      <p
        class="font-bold text-gray-700 text-lg border-b border-dashed border-b-lime-500 flex-1 py-1"
      >
        Question {currentQuestionIndex + 1}<span class="text-gray-500 text-sm"
          >/{totalQuestions}</span
        >
      </p>

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
      <h2
        class="text-lg first-letter:uppercase font-bold leading-tight tracking-tight"
      >
        {question.text}
      </h2>
    </div>

    <ul class="flex flex-col space-y-4">
      {#each question.options as option (option.id)}
        <li>
          <Button
            text={option.text}
            onClickHandler={() => changeSelectedOption(option.label)}
            styles="capitalize text-start text-sky-800 border-sky-900 border rounded-lg py-1.5 px-4 text-sm w-full flex justify-between  cursor-pointer {selectedOption !==
            option.label
              ? ''
              : 'border-green-700'}"
          >
            <p
              class="{selectedOption !== option.label
                ? 'hidden'
                : ''} w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center"
            >
              <i class="ri-check-fill text-lg text-green-500 font-bold"></i>
            </p>
          </Button>
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
        Duration: {formatTimer(totalDuration().minutes)}:{formatTimer(
          totalDuration().seconds
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
