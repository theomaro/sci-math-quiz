<script lang="ts">
  import Card from "../components/ui/Card.svelte";

  export let data: { quizzes: Subject[] };

  const quizzes = data.quizzes;
</script>

<svelte:head>
  <title>SciMathQ</title>
</svelte:head>

<section
  class="quizzes-container px-4 py-8 space-y-12 md:space-y-16 max-w-7xl mx-auto"
>
  <h2 class="text-xl text-center font-medium md:text-2xl">
    #1 Choose your subject
  </h2>

  <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {#each quizzes as quiz}
      <Card
        url={quiz.name.replaceAll(" ", "-")}
        name={quiz.name}
        imageUrl={quiz.imageUrl}
        description={`${quiz.chapters.length} chapters`}
      />
    {/each}
  </div>
</section>
