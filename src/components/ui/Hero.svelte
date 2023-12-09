<script>
  import { goto } from "$app/navigation";
  import Button from "./Button.svelte";
</script>

<section
  class="flex flex-col items-center px-4 pt-8 sm:pt-12 pb-24 mb-6 md:mb-8 text-center bg-gray-50"
>
  <h1
    class="text-2xl text-lime-800 opacity-75 font-bold mb-3 sm:text-3xl sm:mb-4 lg:text-4xl"
  >
    Quiz for Sci-Math students
  </h1>
  <p
    class="text-sm max-w-[19rem] sm:text-base sm:max-w-[22rem] lg:text-lg lg:max-w-md"
  >
    <span class="font-medium italic"
      >Quiz Your Way to the Top of your class!</span
    > Assess your preparation for the final exam by taking a Science and Math knowledge
    and skill test.
  </p>

  <Button
    onClickHandler={() => goto("/")}
    styles="bg-amber-400 text-lime-900 font-medium px-5 py-2 text-xs rounded-md mt-8"
    text="Start your quiz now"
  />
</section>
