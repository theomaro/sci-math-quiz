<script lang="ts">
  export let subject: string = "";
  export let chapter: string = "";
</script>

<ul class="capitalize tracking-tight py-2 flex items-center gap-1">
  {#if subject && !chapter}
    <li>
      <a href="/student" class="text-sky-600">All</a>
    </li>
    <li>|</li>
    <li>
      {subject.replaceAll("-", " ")}
    </li>
  {/if}
  {#if subject && chapter}
    <li>
      <a href="/student" class="text-sky-600">All</a>
    </li>
    <li>|</li>
    <li>
      <a href={`/student/${subject}`} class="text-sky-600"
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
