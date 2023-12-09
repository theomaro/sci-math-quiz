<script>
  import { goto } from "$app/navigation";
  import Button from "./Button.svelte";

  import heroImg from "$lib/images/undraw_online_test_re_kyfx.svg";
</script>

<div
  class="px-4 py-12 flex flex-col items-center justify-center gap-14 bg-gray-50 md:flex-row md:justify-evenly md:py-20 mb-8"
>
  <article class="p-2 w-full max-w-sm lg:max-w-md md:order-2">
    <img src={heroImg} alt="" />
  </article>

  <article class="text-center md:text-start p-2">
    <h1
      class="text-2xl text-emerald-800 opacity-75 font-bold mb-3 sm:text-3xl sm:mb-4 lg:text-4xl"
    >
      Quiz for Sci-Math students
    </h1>
    <p class="max-w-xs sm:max-w-[22rem] lg:text-lg lg:max-w-md lg:ms-4">
      <span class="font-medium italic"
        >Quiz Your Way to the Top of your class!</span
      > Assess your preparation for the final exam by taking a Science and Math knowledge
      and skill test.
    </p>

    <Button
      onClickHandler={() => goto("/")}
      styles="bg-emerald-500 text-white font-medium px-5 py-2 text-lg rounded-md mt-8 lg:ms-4"
      text="Start your quiz now"
    />
  </article>
</div>
