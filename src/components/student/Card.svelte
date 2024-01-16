<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "../ui/Button.svelte";

  export let url: string = "";
  export let name: string = "Card Title";
  export let description: string = "Card description";
  export let imageUrl: string = "";
</script>

<Button
  onClickHandler={() => goto(`/${url}`)}
  styles="quiz-card overflow-hidden w-full shadow rounded cursor-pointer"
>
  {#if imageUrl}
    <img src={imageUrl} alt="" class="h-48 w-full" />
  {/if}

  <div class="flex flex-col text-start items-start py-4 ps-4">
    <h3 class="font-bold first-letter:uppercase">{name}</h3>
    <p class="text-sm">{description}</p>
  </div>
</Button>
