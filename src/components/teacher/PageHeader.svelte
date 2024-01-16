<script lang="ts">
  export let pageTitle: string;
</script>

<section class="py-3 flex justify-between">
  <article class="text-sm">
    <a href="/teacher" class="text-sky-600 hover:underline">Dashboard</a>
    {#if pageTitle}
      <span class="capitalize"> / {pageTitle}</span>
    {/if}
  </article>

  <button class="bg-stone-600 text-emerald-400 px-2 py-1 text-sm rounded">
    <i class="ri-add-line text-base"></i>
    <span>{pageTitle.substring(0, pageTitle.length - 1)}</span></button
  >
</section>
