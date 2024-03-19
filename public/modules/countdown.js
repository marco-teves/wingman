import { tenSecWarn, restWarn, finishWarn, menuOpen } from './audio.js';

let workoutArray = [15,10,15,11];
export let isRunning = false;
const circle = document.querySelector(".circle-outline");

export function startCountdown() {
    
    let workoutIndex = 0;
    const timerElem = document.getElementById('timer');
    circle.classList.toggle("pulse")

    if (isRunning === false) {
      function countdown() {
        isRunning = true;
        let seconds = workoutArray[workoutIndex];
        document.getElementById('timer').innerText = formatTime(seconds);
  
        const countdownInterval = setInterval(function () {
          seconds -= 0.01;
          if (seconds >= 10.1) {
            timerElem.style.color = 'white';
          } else if (seconds <= 10 && seconds >= 9.99) {
            timerElem.style.color = 'yellow';
            tenSecWarn.play();
          }
          document.getElementById('timer').innerText = formatTime(seconds);
          if (seconds <= 0) {
            clearInterval(countdownInterval);
            if (workoutIndex + 1 < workoutArray.length) {
              workoutIndex++;
              countdown();
            } else {
              document.getElementById('timer').innerText = '00.00';
              timerElem.style.color = 'red';
              finishWarn.play();
              isRunning = false;
              circle.classList.toggle("pulse")
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