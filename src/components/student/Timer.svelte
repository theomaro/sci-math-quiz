<script lang="ts">
  export let formatTimer: (time: number, min: number) => void;
  export let canStartPlay: boolean;
  export let totalDuration: () => Duration;

  let textColor: string = "";

  // set up time input
  let mins = totalDuration().minutes;
  let secs = totalDuration().seconds;

  // convert time input into milliseconds
  const minsInMilliseconds = mins * 60 * 1000;
  const secsInMilliseconds = secs * 1000;
  const setTime = minsInMilliseconds + secsInMilliseconds;

  // set up start and finish time
  const startTime = Date.now();
  const finishTime = startTime + setTime;
  let remainingTime: number = 0;

  function countDownTimer() {
    const currentTime = Date.now();
    remainingTime = finishTime - currentTime;

    // convert remaining time from milliseconds into mins and secs
    mins = Math.floor((remainingTime / (1000 * 60)) % 60);
    secs = Math.floor((remainingTime / 1000) % 60);

    textColor = remainingTime < 0.25 * setTime ? "text-rose-500" : "";

    // end the countdown timer
    if (remainingTime < 0) {
      // clear the interval
      clearInterval(timerLoop);

      //
      textColor = "text-gray-600";

      // reset mins & secs to their initial values
      canStartPlay = false;
      mins = 0;
      secs = 0;
    }
  }

  // set up timer loop
  const timerLoop = setInterval(countDownTimer);
</script>

<div
  class="text-xl {textColor
    ? textColor
    : 'text-emerald-600'}  bg-gray-50 py-2 px-3 w-fit flex gap-[2px] shadow-sm rounded cursor-default select-none"
>
  <span>{formatTimer(mins, 2)}</span>
  <span>:</span>
  <span>{formatTimer(secs, 2)}</span>
</div>
