<script lang="ts">
  export let subject: string;
  export let chapter: string;
</script>

<ul class="capitalize tracking-tight py-2 flex gap-1">
  <li>
    <a href={`/${subject}`} class="text-sky-600"
      >{subject.replaceAll("-", " ")}</a
    >
  </li>
  |
  <li class="italic">
    {chapter.replaceAll("-", " ")}
  </li>
</ul>
