<script lang="ts">
  import Button from "./Button.svelte";
  import Link from "./Link.svelte";

  import logoUrl from "$lib/images/logo.png";

  let nav: HTMLElement;
  let li: HTMLLIElement;

  function showMenu(
    e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    let parent = e.currentTarget.parentElement as HTMLElement;
    parent.classList.add("show");
  }

  const hideMenu = () => removeNavigation();

  const dispatchResize = (
    e: UIEvent & { currentTarget: EventTarget & Window }
  ) => e.currentTarget.innerWidth > 768 && removeNavigation();

  function toggleCollapsible(
    e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    const targetLI = e.currentTarget.parentElement as HTMLElement;
    const lis = nav.querySelectorAll(".is-collapsed");

    lis.forEach((li) => li.classList.remove("is-collapsed"));
    targetLI.classList.toggle("is-collapsed");
  }

  function removeNavigation() {
    nav.classList.remove("show");
    const lis = nav.querySelectorAll("li");
    lis.forEach((li) => li.classList.remove("is-collapsed"));
  }
</script>

<svelte:window on:resize={dispatchResize} />

<nav
  bind:this={nav}
  class="group h-14 flex justify-between items-center px-4 max-w-7xl mx-auto"
>
  <div class="text-emerald-800 font-bold py-2 flex items-center">
    <img src={logoUrl} alt="" class="object-cover w-5" />&nbsp;Sci<span
      class="text-stone-700 underline font-medium">Math</span
    >Q
  </div>

  <div
    class="hidden group-[.show]:block px-6 pb-8 pt-7 shadow-md md:shadow-none text-sm absolute top-full right-0 left-0 z-10 md:p-0 md:static space-y-4 md:space-y-0 bg-white border-t md:border-t-0 md:bg-transparent text-start md:flex md:flex-1 md:ms-16"
  >
    <ul
      class="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-8 md:ms-auto"
    >
      <li>
        <button on:click={removeNavigation} class="w-full text-start">
          <Link text="home" styles="md:hover:bg-transparent" />
        </button>
      </li>
      <li>
        <button on:click={removeNavigation} class="w-full text-start">
          <Link href="/" text="How it work" styles="md:hover:bg-transparent" />
        </button>
      </li>
      <li bind:this={li} class="group py-2 relative">
        <Button
          onClickHandler={toggleCollapsible}
          styles="group-[.is-collapsed]:h-28 md:group-[.is-collapsed]:h-auto md:w-auto flex w-full gap-2 cursor-pointer"
        >
          <span class="md:me-2">Who It's For</span>
          <i class="ri-arrow-down-s-line ms-auto"></i>
        </Button>

        <div
          class="hidden group-[.is-collapsed]:block absolute bottom-0 right-0 left-0 ms-4 md:group-[.is-collapsed]:ms-0 md:group-[.is-collapsed]:bottom-auto bg-white md:group-[.is-collapsed]:w-36 pt-4"
        >
          <ul class="flex flex-col space-y-2 md:space-y-0">
            <li>
              <button on:click={removeNavigation} class="w-full text-start">
                <Link
                  href="/student/login"
                  text="student"
                  styles="md:border-b border-b-stone-300 md:p-3"
                />
              </button>
            </li>
            <li>
              <button on:click={removeNavigation} class="w-full text-start">
                <Link
                  href="/teacher/login"
                  text="teacher"
                  styles="md:border-b border-b-stone-300 md:p-3"
                />
              </button>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <button on:click={removeNavigation} class="w-full text-start">
          <Link href="/" text="pricing" styles="md:hover:bg-transparent" />
        </button>
      </li>
    </ul>
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
