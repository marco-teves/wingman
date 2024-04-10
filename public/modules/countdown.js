// countdown.js

import { tenSecWarn, restWarn, finishWarn, menuOpen, getReady, pause, unpause, nextWorkout } from './audio.js';
import { exerciseArr, namedArr } from './getters.js';

export let isRunning = false;
export let isPaused = false;

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
      if (workoutIndex !== 0 && workoutIndex !== 1  && workoutIndex % 2 !== 0){
        nextWorkout.play();
      }

      const countdownInterval = setInterval(() => {
        if (!isPaused) {
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

              displayNextNameElem.innerText = displayName[displayNameIndex];
              countdown();
            } else {
              document.getElementById('timer').innerText = '--.--';
              displayNameElem.innerText = 'finshed!';
              timerElem.style.color = 'white';
              finishWarn.play();
              isRunning = false;
              circle.classList.toggle("pulse");
            }
          }
        }
      }, 10);
    }

    countdown();
  }
}


const pauseBtn = document.getElementById('pauseBtn');
const pausedFx = document.getElementById('pausedFx');

pauseBtn.addEventListener('click', () => {
  if (isRunning) {
    if (isPaused) {
      isPaused = false;
      unpause.play();
      circle.classList.toggle("pulse");
      pausedFx.classList.add("pausedFx");
      pausedFx.classList.remove("pausedFx--active");
    } else {
      isPaused = true;
      pause.play();
      circle.classList.toggle("pulse");
      pausedFx.classList.remove("pausedFx");
      pausedFx.classList.add("pausedFx--active");
    }
  }
});




export function formatTime(timeInSeconds) {
    const formattedTime = Math.max(0, timeInSeconds).toFixed(2);
    return formattedTime;
}
