<script lang="ts">
  import { goto } from "$app/navigation";
  export let pageTitle: string;
</script>

<div class="bg-slate-00 min-h-screen flex justify-center items-center">
  <section class="shadow-xl rounded-lg border border-gray-200 bg-gray-50 p-8">
    <div class="text-center space-y-1 mb-8">
      <h1 class="text-2xl md:text-3xl capitalize">{pageTitle} Registeration</h1>
      <p class="text-sm md:text-base text-slate-600">
        Please, enter your details!
      </p>
    </div>

    <form action="" class="flex flex-col gap-5">
      <div class="flex flex-col gap-3 md:flex-row md:gap-8">
        <div class="flex flex-col gap-1 text-slate-800">
          <label for="" class="text-sm">First name:</label>
          <input
            type="text"
            class="py-1 px-3 w-80 text-lg border border-slate-400 rounded-md outline-none"
          />
        </div>

        <div class="flex flex-col gap-1 text-slate-800">
          <label for="" class="text-sm">Last name:</label>
          <input
            type="text"
            class="py-1 px-3 w-80 text-lg border border-slate-400 rounded-md outline-none"
          />
        </div>
      </div>

      <div class="flex flex-col gap-3 md:flex-row md:gap-8">
        <div class="flex flex-col gap-1 text-slate-800">
          <label for="" class="text-sm">Email:</label>
          <input
            type="email"
            class="py-1 px-3 w-80 text-lg border border-slate-400 rounded-md outline-none"
          />
        </div>

        <div class="flex flex-col gap-1 text-slate-800">
          <label for="" class="text-sm">Username:</label>
          <input
            type="text"
            class="py-1 px-3 w-80 text-lg border border-slate-400 rounded-md outline-none"
          />
        </div>
      </div>

      <div class="flex flex-col gap-3 md:flex-row md:gap-8">
        <div class="flex flex-col gap-1 text-slate-800">
          <label for="" class="text-sm">Password:</label>
          <input
            type="password"
            class="py-1 px-3 w-80 text-lg border border-slate-400 rounded-md outline-none"
          />
        </div>

        <div class="flex flex-col gap-1 text-slate-800">
          <label for="" class="text-sm">Confirm Password:</label>
          <input
            type="password"
            class="py-1 px-3 w-80 text-lg border border-slate-400 rounded-md outline-none"
          />
        </div>
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          class="py-2 w-28 bg-emerald-700 text-slate-100 text-base font-semibold capitalize rounded-md"
        >
          Register
        </button>
      </div>
    </form>

    <div class="flex flex-col items-start ps-1 text-sm">
      <p>Already have an account?</p>
      <button
        on:click={() => goto(`/${pageTitle.toLowerCase()}/login`)}
        class="text-sky-700 underline">Login</button
      >
    </div>
  </section>
</div>
