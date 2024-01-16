<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<section class="grid grid-cols-8 gap-5">
  <button
    on:click={() => goto("/teacher/students")}
    class="col-span-8 sm:col-span-4 lg:col-span-2 shadow-lg rounded-md border border-slate-400 p-8 flex gap-3"
  >
    <div>
      <i class="ri-user-3-line text-5xl text-slate-700"></i>
    </div>
    <div class="flex flex-col text-start">
      <h2 class="font-bold text-4xl text-stone-700">30</h2>
      <p class="text-slate-500 text-base capitalize">registered students</p>
    </div>
  </button>
  <button
    on:click={() => goto("/teacher/")}
    class="col-span-8 sm:col-span-4 lg:col-span-2 shadow-lg rounded-md border border-slate-400 p-8 flex gap-3"
  >
    <div>
      <i class="ri-mouse-line text-5xl text-slate-700"></i>
    </div>
    <div class="flex flex-col text-start">
      <h2 class="font-bold text-4xl text-stone-700">2</h2>
      <p class="text-slate-500 text-base capitalize">Pending students</p>
    </div>
  </button>
  <button
    on:click={() => goto("/teacher/exams")}
    class="col-span-8 sm:col-span-4 lg:col-span-2 shadow-lg rounded-md border border-slate-400 p-8 flex gap-3"
  >
    <div>
      <i class="ri-book-2-line text-5xl text-slate-700"></i>
    </div>
    <div class="flex flex-col text-start">
      <h2 class="font-bold text-4xl text-stone-700">51</h2>
      <p class="text-slate-500 text-base capitalize">total quizzes</p>
    </div>
  </button>

  <button
    on:click={() => goto("/teacher/questions")}
    class="col-span-8 sm:col-span-4 lg:col-span-2 shadow-lg rounded-md border border-slate-400 p-8 flex gap-3"
  >
    <div>
      <i class="ri-question-line text-5xl text-slate-700"></i>
    </div>
    <div class="flex flex-col text-start">
      <h2 class="font-bold text-4xl text-stone-700">709</h2>
      <p class="text-slate-500 text-base capitalize">total questions</p>
    </div>
  </button>
</section>
