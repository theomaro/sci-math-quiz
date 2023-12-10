<script lang="ts">
  export let question: Question;
  let option = question.options.filter(
    (option) => option.label === question.answer
  );
</script>

<div
  class="shadow-sm rounded-xl border border-transparent text-sm text-amber-900 bg-gray-50 ps-6 pe-3 py-3 ms-8 flex gap-3"
>
  <span>({question.answer})</span>
  <span class="flex-1">{option[0].text}</span>
</div>
