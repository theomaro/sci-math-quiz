<script lang="ts">
  export let pageTitle: string = "";
</script>

<section
  class="py-3 flex justify-between flex-col space-y-16 sm:flex-row sm:space-y-0"
>
  <article class="text-base">
    <a href="/teacher" class="text-sky-600 hover:underline">Dashboard</a>
    {#if pageTitle}
      <span class="capitalize"> / {pageTitle}</span>
    {/if}
  </article>

  {#if pageTitle}
    <button
      class="text-white px-4 py-2 text-lg font-bold rounded w-fit capitalize
      bg-slate-700"
    >
      <i class="ri-add-line"></i>
      <span>{pageTitle.substring(0, pageTitle.length - 1)}</span></button
    >
  {/if}
</section>
