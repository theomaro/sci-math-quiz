<script lang="ts">
  import { goto } from "$app/navigation";

  import heroImg from "$lib/images/undraw_online_test_re_kyfx.svg";
</script>

<div
  class="px-4 py-12 flex flex-col items-center justify-center gap-14 bg-white md:flex-row md:justify-evenly md:py-20 lg:py-28 mb-8"
>
  <article class="p-2 w-full max-w-sm lg:max-w-md md:order-2">
    <img src={heroImg} alt="" />
  </article>

  <article class="text-center md:text-start p-2">
    <h1
      class="text-2xl text-emerald-800 opacity-75 font-bold mb-3 sm:text-4xl sm:mb-4 lg:text-5xl lg:mb-6"
    >
      Quiz for Sci-Math students
    </h1>

    <p
      class="max-w-xs sm:max-w-[22rem] lg:text-lg lg:max-w-xl lg:ms-4 xl:text-xl xl:max-w-[37rem]"
    >
      <span class="font-medium italic"
        >Quiz Your Way to the Top of your class!</span
      > Assess your preparation for the final exam by taking a Science and Math knowledge
      and skill test.
    </p>

    <div class="space-x-8 lg:ms-4 flex items-center mt-8 lg:mt-12">
      <button
        on:click={() => goto("/student")}
        class="font-bold text-xl text-emerald-700 py-4 px-12 shadow rounded border border-emerald-600"
        >Student</button
      >
      <span>Or</span>
      <button
        on:click={() => goto("/teacher")}
        class="text-lg text-amber-800 py-3 px-8 shadow rounded border border-amber-700"
        >Teacher</button
      >
    </div>
  </article>
</div>
