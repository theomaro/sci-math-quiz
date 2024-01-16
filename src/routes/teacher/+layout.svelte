<script lang="ts">
  import { page } from "$app/stores";
  import PageHeader from "../../components/teacher/PageHeader.svelte";
  import Sidebar from "../../components/teacher/Sidebar.svelte";

  let pageTitle: string = "";
  page.subscribe((x) => {
    pageTitle = x.url.pathname.replace("teacher", "").replaceAll("/", "");
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.6.0/remixicon.min.css"
  />
</svelte:head>

<div class="grid grid-cols-12 max-w-7xl xl:px-6 mx-auto">
  <Sidebar {pageTitle} />

  <main class="col-span-10 shadow-lg rounded-e p-6 bg-white">
    <PageHeader {pageTitle} />

    <div class="mt-6">
      <slot />
    </div>
  </main>
</div>
