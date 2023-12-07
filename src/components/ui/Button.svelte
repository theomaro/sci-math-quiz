<script lang="ts">
  export let onClickHandler: (
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) => void;

  export let text: string = "";
  export let styles: string = "";
</script>

<button on:click={onClickHandler} class={styles}
  >{text}
  <slot />
</button>
