<script lang="ts">
  import { goto } from "$app/navigation";
  import MainNav from "../../components/ui/MainNav.svelte";
</script>

<header class="shadow-lg relative">
  <MainNav />
</header>

<div class="bg-slate-800 min-h-screen flex justify-center items-center">
  <section class="shadow-xl rounded-lg border border-gray-200 bg-gray-50 p-8">
    <div class="text-center space-y-2 mb-4">
      <h1 class="text-4xl capitalize">Student Login</h1>
      <p class="text-lg text-slate-600">
        Please enter your credentials to login!
      </p>
    </div>

    <form action="" class="flex flex-col gap-6 p-8 w-[32rem]">
      <div class="flex flex-col gap-2 text-slate-800">
        <label for="" class="text-base">Username:</label>
        <input
          type="text"
          class="py-2 px-3 text-lg border border-slate-400 rounded-lg outline-none"
        />
      </div>

      <div class="flex flex-col gap-2 text-slate-800">
        <label for="" class="text-base">Enter Password:</label>
        <input
          type="password"
          class="py-2 px-3 text-lg border border-slate-400 rounded-lg outline-none"
        />
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          class="p-2.5 w-32 bg-emerald-700 text-slate-100 text-xl font-semibold capitalize rounded-lg"
        >
          login
        </button>
      </div>
    </form>

    <div class="flex flex-col items-start ps-8">
      <p>Don't' have an account?</p>
      <button on:click={() => goto("/register")} class="text-sky-700 underline"
        >Register now</button
      >
    </div>
  </section>
</div>
