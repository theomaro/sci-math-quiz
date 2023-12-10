<script lang="ts">
  import Button from "../../../../components/ui/Button.svelte";

  export let percent: number;
  export let handleRestart: () => void;
  export let goBack: () => void;

  const summary: string = percent < 50 ? "less than" : "more than";
</script>

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

    <span class="text-sm md:text-xl">Your results is {summary} the average</span
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
