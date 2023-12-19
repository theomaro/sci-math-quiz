<script lang="ts">
  export let answer: Answer;
  export let question: Question;

  let correctOption = question.options.filter(
    (option) => option.label === question.answer
  );

  let incorrectOption = question.options.filter(
    (option) => option.label === answer.selectedOption
  );
</script>

<div
  class="py-3 {!question.notes
    ? 'last-of-type:border-none pb-0'
    : ''} border-b border-b-slate-300 flex flex-col gap-2"
>
  <div class="text-green-500 flex gap-2">
    <span class="ri-check-line"></span>
    <span class="flex-1">{correctOption[0].text}</span>
  </div>

  {#if !answer.isCorrect}
    <div class="text-red-500 flex gap-2">
      <span class="ri-close-line"></span>
      <span class="flex-1">
        {incorrectOption[0].text}
      </span>
    </div>
  {/if}
</div>

{#if question.notes}
  <div class="space-y-2 py-3 text-sm text-slate-600">
    <h3 class="uppercase font-medium">Learn why</h3>
    <p class="text-slate-700">{question.notes}</p>
  </div>
{/if}
