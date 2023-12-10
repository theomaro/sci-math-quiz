<script lang="ts">
  import { answers } from "../../../../store";

  export let index: number;
  export let notes: string;

  $: isCorrect = $answers[index].isCorrect;

  const text: string = isCorrect ? "Correct" : "Incorrect";
</script>

<div
  class={`px-6 ${
    notes ? "py-6" : "py-3"
  } ms-8 shadow-sm border border-transparent rounded-xl mb-4 ${
    isCorrect ? "text-green-600 bg-green-100" : "text-rose-600 bg-rose-100"
  }`}
>
  <p class="font-medium">
    <i class="ri-tick-fill"></i>
    <span>Your answer is {text}</span>
  </p>
  {#if notes}
    <p class="text-sm text-slate-700 mt-2">{notes}</p>
  {/if}
</div>
