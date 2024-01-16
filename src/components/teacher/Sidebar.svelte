<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<aside class="col-span-2 shadow-lg rounded-s text-sm pt-6 min-h-[90vh]">
  <ul class="flex flex-col">
    <li>
      <button
        on:click={() => goto("/teacher")}
        class="flex items-center space-x-2 w-full px-6 py-3 border-b text-gray-600"
      >
        <i class="ri-dashboard-line text-emerald-600 text-base"></i>
        <span>Dashboard</span>
      </button>
    </li>
    <li>
      <button
        on:click={() => goto("/teacher/students")}
        class="flex items-center space-x-2 w-full px-6 py-3 border-b text-gray-600"
      >
        <i class="ri-user-3-line text-emerald-600 text-base"></i>
        <span class="capitalize">students</span>
      </button>
    </li>
    <li>
      <button
        on:click={() => goto("/teacher/exams")}
        class="flex items-center space-x-2 w-full px-6 py-3 border-b text-gray-600"
      >
        <i class="ri-book-3-line text-emerald-600 text-base"></i>
        <span class="capitalize">exams</span>
      </button>
    </li>
    <li>
      <button
        on:click={() => goto("/teacher/questions")}
        class="flex items-center space-x-2 w-full px-6 py-3 border-b text-gray-600"
      >
        <i class="ri-question-line text-emerald-600 text-base"></i>
        <span class="capitalize">questions</span>
      </button>
    </li>
  </ul>
</aside>
