<script>
  import Sidebar from "../../components/teacher/Sidebar.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.6.0/remixicon.min.css"
  />
</svelte:head>

<div class="grid grid-cols-12 max-w-7xl px-6 mx-auto">
  <Sidebar />

  <main class="col-span-10 shadow-lg rounded-e p-6 bg-white">
    <slot />
  </main>
</div>
