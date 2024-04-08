//listeners.js

import { startCountdown, isRunning, updateWorkoutArr } from './countdown.js';
import { browseOpen, menuOpen, error } from './audio.js';
import { deleteItem } from './draganddrop.js';
import { getItemsInPlaylist, exerciseArr, getDifficulty } from './getters.js';

export function timerBtnListener() {
    const timerBtn = document.querySelector("#stop-watch-btn");
    
    timerBtn.addEventListener('click', function () {
      if (isRunning === false && exerciseArr.length > 0) {
        console.log('countdown', exerciseArr);
        updateWorkoutArr(); // Update workoutArr before starting countdown
        startCountdown();
      } else if (exerciseArr.length == 0) {
        error.play();
        // Remove the flashRed class if it's already applied
        timerBtn.classList.remove('flashRed');
        // Trigger animation on the button by adding the flashRed class
        void timerBtn.offsetWidth; // Trigger reflow to restart the animation
        timerBtn.classList.add('flashRed');
        console.log('no exercises in playlist');
      } else {
        error.play();
        // Remove the flashRed class if it's already applied
        timerBtn.classList.remove('flashRed');
        // Trigger animation on the button by adding the flashRed class
        void timerBtn.offsetWidth; // Trigger reflow to restart the animation
        timerBtn.classList.add('flashRed');
        console.log('countdown already running');
      }
    });
}


export function handleArrowIconClick() {
  const arrowIcon = document.querySelector("#arrow-ico");
  const stopwatchContainer = document.querySelector(".stopwatchContainer");

  arrowIcon.addEventListener('click', function () {
      console.log("Arrow icon clicked");
      arrowIcon.classList.toggle("arrow-rotated");
      stopwatchContainer.classList.toggle("stopwatchContainer--hidden");
      menuOpen.play();

      // Add transitionend event listener if needed
      stopwatchContainer.addEventListener("transitionend", () => {
          // Add transitionend logic here if needed
      });
  });
}

export function handleBrowserButtonClickAndExit() {
  const browseButton = document.getElementById("browse");
  const browserDiv = document.querySelector(".browse--hidden");

  const handleToggle = () => {
    browseOpen.play();
    console.log("Toggling browser div");
    browserDiv.classList.toggle("browse");
    browserDiv.classList.toggle("browse--hidden");
  };

  // Event listener for both buttons
  browseButton.addEventListener('click', handleToggle);
  browserDiv.addEventListener('click', (event) => {
    if (event.target.id === "browseExit") {
      handleToggle();
    }
  });
}







export function deleteBtn(){
  document.getElementById('erase').addEventListener('click', deleteItem);
}

export function confirmBtn(){
  document.getElementById('confirmWorkout').addEventListener('click', getItemsInPlaylist);
 
}

export function difficultySlider(){
  document.getElementById('difficultySlider').addEventListener('oninput', getDifficulty());
}


