<script lang="ts">
  import Button from "../../../../components/ui/Button.svelte";

  export let text: string;
  export let index: number;

  function showAnswer() {}
</script>

<Button
  onClickHandler={showAnswer}
  styles="flex md:items-center py-1 mb-3 w-full gap-3 text-start text-slate-700 leading-snug"
>
  <p>{index}.</p>
  <p class="first-letter:capitalize">{text}</p>
  <i class="ri-arrow-up-s-line text-xl ms-auto"></i>
</Button>
