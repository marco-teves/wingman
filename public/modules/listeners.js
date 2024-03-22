import { startCountdown, isRunning } from './countdown.js';
import { menuOpen } from './audio.js';
import { deleteItem } from './draganddrop.js';


export function timerBtnListener() {
    const timerBtn = document.querySelector("#stop-watch-btn");
    
    timerBtn.addEventListener('click', function () {
      if (isRunning === false) {
        console.log("Countdown started!");
        startCountdown();
      } else {
        console.log("Countdown is already running!");
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



