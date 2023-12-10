<script lang="ts">
  import { goto } from "$app/navigation";

  import { answers } from "../../../../store";

  import Button from "../../../../components/ui/Button.svelte";
  import QuestionItem from "./QuestionItem.svelte";
  import AnswerItem from "./AnswerItem.svelte";
  import ResultsCard from "./ResultsCard.svelte";
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
    <ResultsCard {percent} {handleRestart} {goBack} />
  </div>
</article>

<article>
  <Button
    onClickHandler={showAnswers}
    text="answers"
    styles="capitalize font-bold text-xl text-sky-900 flex justify-between items-center w-full py-1 mb-3"
  >
    <i class="ri-arrow-up-s-line"></i>
  </Button>

  <ol class="flex flex-col space-y-4">
    {#each data.chapter.questions as question, i (question.id)}
      <li>
        <QuestionItem text={question.text} index={i + 1} />
        <AnswerItem index={i} notes={question.notes} />
        <AnswerCorrect {question} />
      </li>
    {/each}
  </ol>
</article>
