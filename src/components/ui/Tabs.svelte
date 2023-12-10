<script lang="ts">
  export let subject: string = "";
  export let chapter: string = "";
</script>

<ul class="capitalize tracking-tight py-2 flex items-center gap-1">
  <li>
    <a href="/">All</a>
  </li>
  {#if subject}
    <li>|</li>
    <li>
      <a href={`/${subject}`} class="text-sky-600"
        >{subject.replaceAll("-", " ")}</a
      >
    </li>
  {/if}
  {#if chapter}
    <li>|</li>
    <li class="italic">
      {chapter.replaceAll("-", " ")}
    </li>
  {/if}
</ul>
