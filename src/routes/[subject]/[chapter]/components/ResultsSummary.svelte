<script lang="ts">
  export let data: {
    chapter: Chapter;
    params: { subject: string; chapter: string };
  };
  export let hideResults: boolean;

  console.log(data, hideResults);
</script>

<h1>Results Summary</h1>
