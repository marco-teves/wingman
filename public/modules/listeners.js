import { startCountdown, isRunning } from './countdown.js';
import { menuOpen } from './audio.js';


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
  
  arrowIcon.addEventListener('click', function () {
      console.log("Arrow icon clicked");
      
      // Toggle CSS class for rotation
      arrowIcon.classList.toggle("arrow-rotated");
      
      // Play audio
      menuOpen.play();
      
      // Toggle visibility of stopwatch container
      const stopwatchContainer = document.querySelector(".stopwatchContainer");
      stopwatchContainer.classList.toggle("stopwatchContainer--hidden");
      
      // Add transitionend event listener if needed
      stopwatchContainer.addEventListener("transitionend", () => {
          // Add transitionend logic here if needed
      });
  });
}
  
export function handleDropDownExitClick() {
  const stopwatchContainer = document.querySelector(".stopwatchContainer");
  
  stopwatchContainer.addEventListener('click', function () {
      if (stopwatchContainer.classList.contains("stopwatchContainer--hidden")) {
          stopwatchContainer.classList.remove("stopwatchContainer--hidden");
      } else {
          stopwatchContainer.classList.add("stopwatchContainer--hidden");
      }
  });
}



