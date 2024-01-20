<script lang="ts">
  import { goto } from "$app/navigation";
  export let pageTitle: string;
</script>

<div class="bg-slate-00 min-h-screen flex justify-center items-center">
  <section class="shadow-xl rounded-lg border border-gray-200 bg-gray-50 p-8">
    <div class="text-center space-y-1 mb-8">
      <h1 class="text-2xl md:text-3xl capitalize">{pageTitle} login</h1>
      <p class="text-sm md:text-base text-slate-600">
        Please enter your credentials to login!
      </p>
    </div>

    <form
      method="post"
      action={`/${pageTitle}?/login`}
      class="flex flex-col gap-5"
    >
      <div class="flex flex-col gap-1 text-slate-800">
        <label for="username" class="text-sm">Username:</label>
        <input
          type="text"
          name="username"
          class="py-1 px-3 w-80 text-lg border border-slate-400 rounded-md outline-none"
        />
      </div>

      <div class="flex flex-col gap-1 text-slate-800">
        <label for="password" class="text-sm">Enter Password:</label>
        <input
          type="password"
          name="password"
          class="py-1 px-3 w-80 text-lg border border-slate-400 rounded-md outline-none"
        />
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          class="py-2 w-24 bg-emerald-700 text-slate-100 text-base font-semibold capitalize rounded-md"
        >
          login
        </button>
      </div>
    </form>

    <div class="flex flex-col items-start text-sm">
      <p>Don't' have an account?</p>
      <button
        on:click={() => goto(`/${pageTitle.toLocaleLowerCase()}/register`)}
        class="text-sky-700 underline">Register now</button
      >
    </div>
  </section>
</div>
