

// audio samples
const tenSecWarn= new Audio("assets/10-second-warning.mp3");
const restWarn = new Audio("assets/restCue.mp3");
const finishWarn = new Audio("assets/workoutDone.mp3"); // << this is temporary 
const menuOpen = new Audio("assets/menuOpen.mp3");
// add later : workout id, name, description and second duration
// list of different workout times (in s)
//restTime = 2;
const getReadyTime = 5;
let workoutArray = [getReadyTime,10,15,11];
let isRunning = false;

function startCountdown() {
  let workoutIndex = 0;

  const timerElem = document.getElementById('timer');

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
          }
        }
      }, 10);
    }

    countdown();
  }
}

function formatTime(timeInSeconds) {
  const formattedTime = Math.max(0, timeInSeconds).toFixed(2);
  return formattedTime;
}
// Listeners //

function timerBtnListener() {
  const timerBtn = document.querySelector("#stop-watch-btn");
  timerBtn.addEventListener('click', function () {
    if (isRunning === false) {
      startCountdown();
    } else {
      console.log("Countdown is already running!");
    }
  });
}

document.querySelector("#arrow-ico").addEventListener("click", () => {
  const arrowIcon = document.querySelector("#arrow-ico");
  arrowIcon.classList.toggle("arrow-rotated");
  const stopwatchContainer = document.querySelector(".stopwatchContainer");
  menuOpen.play();
  stopwatchContainer.classList.toggle("stopwatchContainer--hidden");
  document.querySelector(".stopwatchContainer").addEventListener("transitionend", () => {
    /*setTimeout(() => {
      document.body.removeChild(stopwatchContainer);
    }, 100);*/
  });
});

document.querySelector(".dropDownExitBtn").addEventListener("click", () => {
  const stopwatchContainer = document.querySelector(".stopwatchContainer");

  if (stopwatchContainer.classList.contains("stopwatchContainer--hidden")) {
    stopwatchContainer.classList.remove("stopwatchContainer--hidden");
  } else {
    stopwatchContainer.classList.add("stopwatchContainer--hidden");
  }

  stopwatchContainer.addEventListener("transitionend", () => {
    // Add any additional actions when the transition is complete
  });
});







timerBtnListener()

