<script lang="ts">
  import { goto } from "$app/navigation";

  import { answers } from "../../../../store";

  import Button from "../../../../components/ui/Button.svelte";
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

  let container: HTMLElement;

  function handleRestart() {
    hideResults = true;
    answers.set([]);
  }

  function goBack() {
    goto(`/${data.params.subject}`);
  }

  function toggleAnswers() {
    container.classList.toggle("show");
  }

  function toggleAnswer(
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    let target = event.currentTarget;
    target.parentElement?.classList.toggle("show-inner");
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

<article class="group" bind:this={container}>
  <Button
    onClickHandler={toggleAnswers}
    text="answers"
    styles="capitalize font-bold text-xl text-sky-900 flex justify-between items-center w-full py-1 mb-3"
  >
    <i class="ri-arrow-down-s-line group-[.show]:rotate-180"></i>
  </Button>

  <ol class="hidden group-[.show]:flex flex-col space-y-4">
    {#each data.chapter.questions as question, i (question.id)}
      <li class="group">
        <Button
          onClickHandler={toggleAnswer}
          styles="flex items-start md:items-center py-1 mb-3 w-full gap-3 text-start text-slate-700 leading-snug"
        >
          <span>{i + 1}.</span>
          <p class="first-letter:capitalize">{question.text}</p>
          <i
            class="ri-arrow-up-s-line text-xl ms-auto group-[.show-inner]:rotate-180"
          ></i>
        </Button>

        <div class="hidden group-[.show-inner]:block">
          <AnswerItem index={i} notes={question.notes} />
          <AnswerCorrect {question} />
        </div>
      </li>
    {/each}
  </ol>
</article>
