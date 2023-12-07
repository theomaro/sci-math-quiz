<script lang="ts">
  import "../app.css";
  import Nav from "../components/ui/Nav.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.6.0/remixicon.min.css"
  />
</svelte:head>

<header class="shadow-lg relative">
  <Nav />
</header>

<div class="bg-gray-100 h-screen">
  <slot />
</div>
