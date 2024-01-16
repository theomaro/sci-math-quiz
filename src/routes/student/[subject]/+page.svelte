<script lang="ts">
  import Card from "../../../components/student/Card.svelte";
  import Tabs from "../../../components/student/Tabs.svelte";

  export let data;
</script>

<svelte:head>
  <title>{data.subject.name.toUpperCase()}</title>
</svelte:head>

<div class="ps-8 pt-8 max-w-7xl mx-auto">
  <Tabs subject={data.subject.name} />
</div>

<section
  class="quizzes-container px-4 py-8 space-y-12 md:space-y-16 max-w-7xl mx-auto"
>
  <h2 class="text-xl text-center font-medium md:text-2xl">
    #2 Choose your chapter
  </h2>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each data.subject.chapters as chapter (chapter.id)}
      {#if chapter.questions.length > 0}
        <Card
          url={`student/${data.subject.name.replaceAll(
            " ",
            "-"
          )}/${chapter.title.replaceAll(" ", "-")}`}
          name={chapter.title}
          description={`${chapter.questions.length} questions`}
        />
      {/if}
    {/each}
  </div>
</section>
