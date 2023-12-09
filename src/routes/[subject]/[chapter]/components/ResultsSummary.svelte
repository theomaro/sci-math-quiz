<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "../../../../components/ui/Button.svelte";
  import { answers } from "../../../../store";

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

  const summary: string = percent < 50 ? "less than" : "more than";

  function handleRestart() {
    hideResults = true;
    answers.set([]);
  }

  function goBack() {
    goto(`/${data.params.subject}`);
  }

  function showAnswers() {
    //
  }
</script>

<article class="pb-8 border-b-2">
  <p class="font-bold text-gray-400 tracking-tight capitalize mb-3 md:text-2xl">
    <span class="text-amber-600">{totalCorrectAnswer}</span>
    <span class="text-gray-500">/{totalQuestions}</span> Questions answered correctly
  </p>

  <div class="shadow rounded-lg bg-white p-6 md:p-12 space-y-10 md:space-y-16">
    <div class="flex items-center space-x-8">
      <div>
        <div class="h-24 w-24 md:h-32 md:w-32 rounded-full bg-rose-50"></div>
      </div>

      <div class="tracking-tight flex flex-col">
        <p class="font-bold text-lg md:text-3xl">
          Your score is <span
            class={percent < 50 ? "text-red-500" : "text-green-600"}
            >{percent}%</span
          >
        </p>

        <span class="text-sm md:text-xl"
          >Your results is {summary} the average</span
        >
      </div>
    </div>

    <div class="flex justify-between">
      <Button
        text="restart quiz"
        onClickHandler={handleRestart}
        styles="px-4 rounded-full py-2 uppercase bg-sky-600 text-white font-medium"
      />

      <Button
        text="go back"
        onClickHandler={goBack}
        styles="px-4 rounded-full py-2 capitalize bg-emerald-600 text-white font-medium"
      />
    </div>
  </div>
</article>

<article>
  <Button
    onClickHandler={showAnswers}
    text="answers"
    styles="capitalize font-bold text-xl text-sky-900 flex justify-between items-center w-full"
  >
    <i class="ri-arrow-down-s-line"></i>
  </Button>
</article>
