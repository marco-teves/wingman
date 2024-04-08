// countdown.js
import { tenSecWarn, restWarn, finishWarn, menuOpen, getReady } from './audio.js';
import { exerciseArr, namedArr } from './getters.js';

export let isRunning = false;
const circle = document.querySelector(".circle-outline");
let workoutArr = exerciseArr;
let displayName = namedArr;

export function updateWorkoutArr() {
  workoutArr = exerciseArr;
}
export function updateNamedArr() {
  displayName = namedArr;
}
export function startCountdown() {
  const timerElem = document.getElementById('timer');
  const displayNameElem = document.getElementById('displayWorkoutName');
  const displayNextNameElem = document.getElementById('displayNextWorkoutName');
  circle.classList.toggle("pulse");

  if (!isRunning) {
    let workoutIndex = 0;
    let seconds = workoutArr[workoutIndex];
    let displayNameIndex = 0;
    let displayNameText = displayName[displayNameIndex];

    function countdown() {
      isRunning = true;

      displayNameText = displayName[displayNameIndex];
      displayNameElem.innerText = displayNameText;

      if (displayNameIndex + 1 < displayName.length) {
        displayNextNameElem.innerText = displayName[displayNameIndex + 1];
      } else {
        displayNextNameElem.innerText = '';
      }

      displayNameText = displayName[displayNameIndex];
      displayNameElem.innerText = displayNameText;

      // index dependent audio cues
      if (workoutIndex % 2 === 0 && workoutIndex !== 0) {
        restWarn.play();
      }
      if (workoutIndex === 0) {
        getReady.play();
      }

      const countdownInterval = setInterval(() => {
        seconds -= 0.01;
        timerElem.innerText = formatTime(seconds);

        // timer dependent audio cues
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
            displayNameIndex++;

            seconds = workoutArr[workoutIndex];
            // Update displayNextWorkoutName with the next element from displayName array
            displayNextNameElem.innerText = displayName[displayNameIndex]; 
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
