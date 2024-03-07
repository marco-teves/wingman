

// audio samples
const tenSecWarn= new Audio("assets/10-second-warning.mp3");
const restWarn = new Audio("assets/restCue.mp3");
const finishWarn = new Audio("assets/workoutDone.mp3"); // << this is temporary 

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

function dropDownList() {
  const arrow = document.getElementById('arrow-ico');
  const slidingWindow = document.getElementById('slidingWindow');

  function toggleSlidingWindow(event) {
    event.stopPropagation();
    slidingWindow.classList.toggle('show');
  }

  arrow.addEventListener('click', toggleSlidingWindow);
}

function closeDropDownList() {
  const ddClose = document.getElementById('closeBtn');
  const slidingWindow = document.getElementById('slidingWindow');

  ddClose.addEventListener('click', function (event) {
    event.stopPropagation(); 
    slidingWindow.classList.remove('show');
  });
}

//function clearPage(){
//  main.textContent = '';
//}

//----- INFO BUTTON FUNCTIONS ///

timerBtnListener();
dropDownList();
closeDropDownList();
