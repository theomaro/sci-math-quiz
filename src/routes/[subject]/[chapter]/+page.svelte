<script lang="ts">
  import { onMount } from "svelte";
  import Tabs from "../../../components/ui/Tabs.svelte";
  import { answers } from "../../../store";
  import Quiz from "./components/Quiz.svelte";
  import ResultsSummary from "./components/ResultsSummary.svelte";

  export let data: {
    chapter: Chapter;
    params: { subject: string; chapter: string };
  };

  let hideResults = true;

  onMount(() => answers.set([]));
</script>

<svelte:head>
  <title>{data.params.chapter.toUpperCase()}</title>
</svelte:head>

<div class="ps-8 pt-8 max-w-7xl mx-auto">
  <Tabs subject={data.params.subject} chapter={data.params.chapter} />
</div>

<div class="p-8 max-w-3xl mx-auto space-y-8">
  {#if hideResults}
    <Quiz {data} bind:hideResults />
  {:else}
    <ResultsSummary {data} bind:hideResults />
  {/if}
</div>
