<script lang="ts">
  import { page } from "$app/stores";

  import EntriesSelector from "../../../components/teacher/EntriesSelector.svelte";
  import EntriesStats from "../../../components/teacher/EntriesStats.svelte";
  import PageHeader from "../../../components/teacher/PageHeader.svelte";
  import Paginator from "../../../components/teacher/Paginator.svelte";
  import SearchForm from "../../../components/teacher/SearchForm.svelte";

  let pageTitle: string = "";
  page.subscribe((x) => {
    pageTitle = x.url.pathname.replace("teacher", "").replaceAll("/", "");
  });
</script>

<svelte:head>
  <title>{pageTitle.toUpperCase()}</title>
</svelte:head>

<div class="space-y-8">
  <PageHeader {pageTitle} />

  <div class="tracking-wide space-y-8">
    <section class="flex justify-between items-center">
      <EntriesSelector />
      <SearchForm />
    </section>

    <section
      class="flex flex-col gap-3 ring-1 ring-slate-300 overflow-hidden rounded"
    >
      <div>
        <p
          class="capitalize py-3 bg-sky-600 text-white text-center font-bold rounded-t-md"
        >
          Select exam to view questions
        </p>
      </div>
      <table class="table-auto w-full">
        <thead class="border-b border-slate-500">
          <tr>
            <th class="p-2 text-sm text-start">Exam Name</th>
            <th class="p-2 text-sm text-start w-24">Class</th>
            <th class="p-2 text-sm text-start w-32">Subject Code</th>
            <th class="p-2 text-sm text-start w-44">Total Questions</th>
            <th class="p-2 text-sm text-start w-32">View Question</th>
          </tr>
        </thead>

        <tbody>
          <tr class="odd:bg-sky-50 text-slate-700">
            <td class="p-2 text-sm">Coordinate Geometry</td>
            <td class="p-2 text-sm">IV</td>
            <td class="p-2 text-sm">033</td>
            <td class="p-2 text-sm">9</td>
            <td
              class="p-2 text-base flex space-x-4 font-bold justify-center items-center"
            >
              <button class="text-slate-200 bg-sky-600 py-1 px-2 rounded">
                <i class="ri-eye-line"></i>
              </button>
            </td>
          </tr>
          <tr class="odd:bg-sky-50 text-slate-700">
            <td class="p-2 text-sm">Circle</td>
            <td class="p-2 text-sm">II</td>
            <td class="p-2 text-sm">041</td>
            <td class="p-2 text-sm">20</td>
            <td
              class="p-2 text-base flex space-x-4 font-bold justify-center items-center"
            >
              <button class="text-slate-200 bg-sky-600 py-1 px-2 rounded">
                <i class="ri-eye-line"></i>
              </button>
            </td>
          </tr>
          <tr class="odd:bg-sky-50 text-slate-700">
            <td class="p-2 text-sm">Quadratic equation</td>
            <td class="p-2 text-sm">III</td>
            <td class="p-2 text-sm">033</td>
            <td class="p-2 text-sm">16</td><td
              class="p-2 text-base flex space-x-4 font-bold justify-center items-center"
            >
              <button class="text-slate-200 bg-sky-600 py-1 px-2 rounded">
                <i class="ri-eye-line"></i>
              </button>
            </td>
          </tr>
          <tr class="odd:bg-sky-50 text-slate-700">
            <td class="p-2 text-sm">Functions</td>
            <td class="p-2 text-sm">III</td>
            <td class="p-2 text-sm">041</td>
            <td class="p-2 text-sm">8</td>
            <td
              class="p-2 text-base flex space-x-4 font-bold justify-center items-center"
            >
              <button class="text-slate-200 bg-sky-600 py-1 px-2 rounded">
                <i class="ri-eye-line"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="flex justify-between items-center">
      <EntriesStats />
      <Paginator />
    </section>
  </div>
</div>
