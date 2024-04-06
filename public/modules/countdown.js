// countdown.js
import { tenSecWarn, restWarn, finishWarn, menuOpen } from './audio.js';
import { exerciseArr } from './getters.js';

export let isRunning = false;
const circle = document.querySelector(".circle-outline");
let workoutArr = exerciseArr;

export function updateWorkoutArr() {
  workoutArr = exerciseArr;
}

export function startCountdown() {
  const timerElem = document.getElementById('timer');
  circle.classList.toggle("pulse");

  if (!isRunning) {

    let workoutIndex = 0;
    let seconds = workoutArr[workoutIndex];

    function countdown() {
      isRunning = true;

      const countdownInterval = setInterval(() => {
        seconds -= 0.01;
        timerElem.innerText = formatTime(seconds);
        if (seconds >= 10.1) {
            timerElem.style.color = 'white';
        } else if (seconds <= 10 && seconds >= 9.99) {
            timerElem.style.color = 'yellow';
            tenSecWarn.play();
        }
        document.getElementById('timer').innerText = formatTime(seconds);

       if (seconds <= 0) {
        clearInterval(countdownInterval);

        if (workoutIndex + 1 < workoutArr.length) {
            workoutIndex++;
            seconds = workoutArr[workoutIndex];
            countdown();
        } else {
            document.getElementById('timer').innerText = 'finish!';
            timerElem.style.color = 'red';
            finishWarn.play();
            isRunning = false;
            circle.classList.toggle("pulse");
          }
        }
      }, 10);
    }

    countdown();
  }
}

export function formatTime(timeInSeconds) {
    const formattedTime = Math.max(0, timeInSeconds).toFixed(2);
    return formattedTime;
}
