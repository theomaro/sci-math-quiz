<script lang="ts">
  export let href: string = "/";
  export let text: string = "";
  export let styles: string = "";
</script>

<a
  {href}
  class={`p-2 inline-block w-full hover:bg-red-50 hover:rounded md:hover:rounded-none capitalize focus:bg-transparent focus-within:bg-transparent active:bg-transparent ${styles}`}
>
  {text}
  <slot />
</a>
