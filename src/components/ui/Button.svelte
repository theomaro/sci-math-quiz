<script lang="ts">
  export let onClickHandler: (
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) => void;

  export let text: string = "";
  export let styles: string = "";
</script>

<button on:click={onClickHandler} class="active:bg-none focus:bg-none {styles}">
  <p>{text}</p>
  <slot />
</button>
