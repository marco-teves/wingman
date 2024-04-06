//listeners.js

import { startCountdown, isRunning, updateWorkoutArr } from './countdown.js';
import { menuOpen } from './audio.js';
import { deleteItem } from './draganddrop.js';
import { getItemsInPlaylist, exerciseArr } from './getters.js';

export function timerBtnListener() {
    const timerBtn = document.querySelector("#stop-watch-btn");
    
    timerBtn.addEventListener('click', function () {
      if (isRunning === false && exerciseArr.length > 0) {
        console.log('countdown', exerciseArr);
        updateWorkoutArr(); // Update workoutArr before starting countdown
        startCountdown();
      } else if (exerciseArr.length == 0) {
        console.log('no exercises in playlist');
      } else {
        console.log('countdown already running');
      }
    });
}


export function handleArrowIconClick() {
  const arrowIcon = document.querySelector("#arrow-ico");
  const stopwatchContainer = document.querySelector(".stopwatchContainer");

  arrowIcon.addEventListener('click', function () {
      console.log("Arrow icon clicked");

      // Toggle CSS class for rotation
      arrowIcon.classList.toggle("arrow-rotated");

      // Toggle visibility of stopwatch container
      stopwatchContainer.classList.toggle("stopwatchContainer--hidden");

      // Play audio
      menuOpen.play();

      // Add transitionend event listener if needed
      stopwatchContainer.addEventListener("transitionend", () => {
          // Add transitionend logic here if needed
      });
  });
}


export function deleteBtn(){
  document.getElementById('erase').addEventListener('click', deleteItem);
}

export function confirmBtn(){
  document.getElementById('confirmWorkout').addEventListener('click', getItemsInPlaylist);
  
}


