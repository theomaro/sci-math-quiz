<script lang="ts">
  export let currentQuestionIndex: number;
  export let totalQuestions: number;
</script>

<p
  class="font-bold text-gray-700 text-lg border-b border-dashed border-b-lime-500 flex-1 py-1"
>
  Question {currentQuestionIndex + 1}<span class="text-gray-500 text-sm"
    >/{totalQuestions}</span
  >
</p>
