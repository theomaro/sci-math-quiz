<script lang="ts">
  import Card from "../../components/ui/Card.svelte";

  export let data: Subject;

  let chapters = data.chapters;
</script>

<svelte:head>
  <title>{data.name.toUpperCase()}</title>
</svelte:head>

<section
  class="quizzes-container px-4 py-8 space-y-12 md:space-y-16 max-w-7xl mx-auto"
>
  <h2 class="text-xl text-center font-medium md:text-2xl">
    #2 Choose your chapter
  </h2>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each chapters as chapter}
      {#if chapter.questions.length > 0}
        <Card
          url={`${data.name}/${chapter.title.replaceAll(" ", "-")}`}
          name={chapter.title}
          description={`${chapter.questions.length} questions`}
        />
      {/if}
    {/each}
  </div>
</section>
