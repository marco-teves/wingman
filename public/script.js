// wait for dom to load before doing anything


  // audio samples
  const tenSecWarn= new Audio("assets/10-second-warning.mp3");
  const restWarn = new Audio("assets/restCue.mp3");
  const finishWarn = new Audio("assets/workoutDone.mp3"); // << this is temporary 
  const menuOpen = new Audio("assets/menuOpen.mp3");
  
  
  //restTime = 2;
  // const getReadyTime = 5;
  let workoutArray = [15,10,15,11];

  //flag to check if the countdown is running
  let isRunning = false;
  const circle = document.querySelector(".circle-outline");



  // preloader (currently set to 1s to demonstrate)
  setTimeout(function() {
  document.querySelector(".loadScreen").classList.add("loadScreen--hidden");

    document.querySelector(".loadScreen").addEventListener("transitionend", () => {
      document.body.removeChild(document.querySelector(".loadScreen"));
    });
  }, 1000);

  function startCountdown() {
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
  
  function formatTime(timeInSeconds) {
    const formattedTime = Math.max(0, timeInSeconds).toFixed(2);
    return formattedTime;
  }

  /* function dupeWorkoutItems(workoutNames) {
    const templateItem = document.getElementById('workoutItemTemplate');
    const workoutOptions = document.querySelector('.workoutOptions');
  
    for (let i = 0; i < workoutNames.length; i++) {
        const clone = document.importNode(templateItem.content, true);
        const workoutNameElement = clone.querySelector('#workoutName'); // Select the <p> tag
        workoutNameElement.textContent = workoutNames[i]; // Set the text content to the workout name
        workoutOptions.appendChild(clone);
    }
  }

  const workoutNames = ["Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges","Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges",]; */

  /* function dupeWorkoutSlots() {
    const template = document.getElementById('workoutSlotsTemplate');
    const workoutPlan = document.querySelector('.workoutPlan');
  
    for (let i = 0; i < 6; i++) {
      const clone = document.importNode(template.content, true);
      workoutPlan.appendChild(clone);
    }
    
  } */
  
  
  const draggables = document.querySelectorAll('.draggable');
  const containers = document.querySelectorAll('.workoutPlan');
  function drag() {
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      console.log('drag start');
    });
  });
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
  

  

  
  drag();
  timerBtnListener();
  /* dupeWorkoutSlots(); */
  /* dupeWorkoutItems(workoutNames);
   */

  //dropdown arrow button to show and hide/show the menu
  document.querySelector("#arrow-ico").addEventListener("click", () => {
    const arrowIcon = document.querySelector("#arrow-ico");
    arrowIcon.classList.toggle("arrow-rotated");
    
    const stopwatchContainer = document.querySelector(".stopwatchContainer");
    menuOpen.play();
    
    stopwatchContainer.classList.toggle("stopwatchContainer--hidden");
    document.querySelector(".stopwatchContainer").addEventListener("transitionend", () => {
    });
  });
  
  document.querySelector(".dropDownExitBtn").addEventListener("click", () => {
    const stopwatchContainer = document.querySelector(".stopwatchContainer");
  
    if (stopwatchContainer.classList.contains("stopwatchContainer--hidden")) {
      stopwatchContainer.classList.remove("stopwatchContainer--hidden");
    } else {
      stopwatchContainer.classList.add("stopwatchContainer--hidden");
    }
  });
  
  
  







