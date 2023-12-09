<script lang="ts">
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

  function handleRestart() {
    hideResults = true;
    answers.set([]);
  }
</script>

<article class="pb-8 border-b-2">
  <p class="font-bold text-gray-400 tracking-tight capitalize mb-3">
    <span class="text-emerald-500">{totalCorrectAnswer}</span>
    <span class="text-gray-500">/{totalQuestions}</span> Questions answered correctly
  </p>

  <div class="shadow rounded-lg bg-white p-6 space-y-10">
    <div class="flex items-center space-x-8">
      <div>
        <div class="h-24 w-24 rounded-full bg-rose-50"></div>
      </div>

      <div class="tracking-tight flex flex-col">
        <p class="font-medium text-lg">
          Your score is <span class="text-red-500">{percent}%</span>
        </p>

        <span class="text-sm">Your results is less than the average</span>
      </div>
    </div>

    <div class="flex justify-center">
      <Button
        text="restart quiz"
        onClickHandler={handleRestart}
        styles=" w-full rounded-full py-2 uppercase bg-gray-600 text-white font-medium"
      />
    </div>
  </div>
</article>

<article>
  <Button
    onClickHandler={handleRestart}
    text="answers"
    styles="capitalize font-bold text-xl text-sky-900 flex justify-between items-center w-full"
  >
    <i class="ri-arrow-down-s-line"></i>
  </Button>
</article>
