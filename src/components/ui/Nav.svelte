<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "./Button.svelte";
  import Link from "./Link.svelte";

  import logoUrl from "$lib/images/logo.png";

  let nav: HTMLElement;
  let li: HTMLLIElement;

  function showMenu(
    e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    let parent = e.currentTarget.parentElement;
    parent?.classList.add("show");
  }

  function hideMenu(
    e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    let parent = e.currentTarget.parentElement;
    parent?.classList.remove("show");
  }

  function dispatchResize(
    e: UIEvent & { currentTarget: EventTarget & Window }
  ) {
    let window = e.currentTarget;
    if (window.innerWidth > 768) {
      nav.classList.remove("show");
      li.classList.remove("is-collapsed");
    }
  }

  function toggleCollapsible(
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    const li = event.currentTarget.parentElement;
    li?.classList.toggle("is-collapsed");
  }
</script>

<svelte:window on:resize={dispatchResize} />

<nav
  bind:this={nav}
  class="group h-14 flex justify-between items-center px-4 max-w-7xl mx-auto"
>
  <a href="/" class="text-emerald-800 font-bold p-2 flex items-center">
    <img
      src={logoUrl}
      alt=""
      class="object-cover w-5"
    />&nbsp;Sci<span class="text-stone-700 underline font-medium">Math</span
    >Q</a
  >

  <div
    class="hidden group-[.show]:block px-6 pb-8 pt-7 shadow-md md:shadow-none text-sm absolute top-full right-0 left-0 z-10 md:p-0 md:static space-y-4 md:space-y-0 bg-white border-t md:border-t-0 md:bg-transparent text-start md:flex md:flex-1 md:ms-16"
  >
    <ul class="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-8">
      <li>
        <Link text="home" styles="md:hover:bg-transparent" />
      </li>
      <li>
        <Link
          href="/about/who-its-for"
          text="Who it's for"
          styles="md:hover:bg-transparent"
        />
      </li>
      <li>
        <Link
          href="/about/how-it-work"
          text="How it work"
          styles="md:hover:bg-transparent"
        />
      </li>
      <li bind:this={li} class="group p-2 relative">
        <Button
          onClickHandler={toggleCollapsible}
          styles="group-[.is-collapsed]:h-48 md:group-[.is-collapsed]:h-auto w-full md:w-auto flex justify-between cursor-pointer"
        >
          <span class="md:me-2">Quizzes</span>
          <i class="ri-arrow-down-s-line"></i>
        </Button>

        <div
          class="hidden group-[.is-collapsed]:block absolute bottom-0 right-0 left-0 ms-4 md:group-[.is-collapsed]:ms-0 md:group-[.is-collapsed]:bottom-auto bg-white md:group-[.is-collapsed]:w-36 pt-4"
        >
          <ul class="flex flex-col space-y-2 md:space-y-0">
            <li>
              <Link
                href="/physics"
                text="physics"
                styles="md:border-b border-b-stone-300 md:p-3"
              />
            </li>
            <li>
              <Link
                href="/biology"
                text="biology"
                styles="md:border-b border-b-stone-300 md:p-3"
              />
            </li>
            <li>
              <Link
                href="/chemistry"
                text="chemistry"
                styles="md:border-b border-b-stone-300 md:p-3"
              />
            </li>
            <li>
              <Link href="/mathematics" text="mathematics" styles=" md:p-3" />
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <div
      class="flex flex-col px-2 space-y-6 md:space-y-0 md:flex-row md:space-x-6 md:ms-auto"
    >
      <Button
        onClickHandler={() => goto("/user/login")}
        text="login"
        styles="p-2 inline-block w-full bg-white text-lime-800 font-bold capitalize ring-1 ring-lime-700 rounded cursor-pointer hover:bg-lime-700 hover:text-white md:px-4"
      />

      <Button
        onClickHandler={() => goto("/user/signup")}
        text="signup"
        styles="p-2 inline-block w-full bg-lime-700 text-white font-bold capitalize ring-1 ring-lime-700 rounded cursor-pointer md:px-4 hover:bg-white hover:text-lime-800"
      />
    </div>
  </div>

  <Button
    onClickHandler={showMenu}
    styles="px-1 text-xl rounded shadow me-2 group-[.show]:hidden md:hidden cursor-pointer"
  >
    <i class="ri-menu-line"></i>
  </Button>
  <Button
    onClickHandler={hideMenu}
    styles="px-1 text-xl rounded shadow me-2 group-[.show]:block hidden cursor-pointer"
  >
    <i class="ri-close-line"></i>
  </Button>
</nav>
