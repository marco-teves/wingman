//listeners.js

import { startCountdown, isRunning, updateWorkoutArr, updateNamedArr } from './countdown.js';
import { browseOpen, menuOpen, error, confirm } from './audio.js';
import { deleteItem } from './draganddrop.js';
import { getNamedArray, getItemsInPlaylist, exerciseArr} from './getters.js';
import { addWorkout } from './buildworkoutoptions.js';

export function timerBtnListener() {
    const timerBtn = document.getElementById("playBtn");
    timerBtn.addEventListener('click', function () {
      if (isRunning === false && exerciseArr.length > 0) {
        console.log('countdown', exerciseArr);
        updateWorkoutArr();
        updateNamedArr();
        startCountdown();
      } else if (exerciseArr.length == 0) {
        error.play();
        timerBtn.classList.remove('flashRed');
        void timerBtn.offsetWidth;
        timerBtn.classList.add('flashRed');
        console.log('no exercises in playlist');
      } else {
        error.play();
        timerBtn.classList.remove('flashRed');
        void timerBtn.offsetWidth; 
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
  });
}

/* export function handleBrowserButtonClickAndExit() {
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
} */

export function deleteBtn(){
  const confirmButton = document.getElementById('confirmWorkout');
  
  document.getElementById('erase').addEventListener('click', () => {
    confirmButton.innerText = 'PRESS TO CONFIRM'
  confirmButton.style.backgroundColor = '#515151';
  deleteItem();
})
  
};

export function confirmBtn() {
  const confirmButton = document.getElementById('confirmWorkout');
  const playlist = document.querySelector('.playlist');
  confirmButton.addEventListener('click', () => {
    const hasItems = playlist.children.length > 0;
    if (hasItems && !isRunning) {
      confirmButton.innerText = '! CONFIRMED !';
      confirmButton.style.backgroundColor = '#00ff1a';
      confirm.play();
      getItemsInPlaylist();
      getNamedArray();
    } else if (hasItems && isRunning){
      confirmButton.style.backgroundColor = '#515151';
      confirmButton.innerText = 'ERROR: COUNTDOWN ALREADY RUNNING';
      error.play();
      console.log('cant change playlist while countdown is running');
    } else {
      confirmButton.style.backgroundColor = '#515151';
      confirmButton.innerText = 'NO EXERCISES IN PLAYLIST';
      error.play();
      
    }
    
  });

}

/* export function difficultySlider(){
  document.getElementById('difficultySlider').addEventListener('oninput', getDifficulty());
} */

export function saveBtn(){
  document.getElementById('save').addEventListener('click', function() {

    const playlistName = prompt('Enter playlist name:');
    const authorName = prompt('Enter author name:');

    console.log('Playlist Name:', playlistName);
    console.log('Author Name:', authorName);
  });
}

export function addBtn() {
    document.getElementById('add').addEventListener('click', function() {
        let workoutName;
        let duration;
        let description;

        do {
            workoutName = prompt('Enter workout name (or click cancel to cancel):');
            if (workoutName === null) {
                console.log('User cancelled the input.');
                return;
            }
        } while (!workoutName);

        do {
            const durationInput = prompt(`Enter the duration (in seconds) for ${workoutName} (or click cancel to cancel):`);
            if (durationInput === null) {
                console.log('User cancelled the input.');
                return;
            }
            duration = parseInt(durationInput);
            if (!Number.isInteger(duration) || duration <= 0) {
                alert('Please enter a valid whole number greater than 0 for the duration.');
            }
        } while (!Number.isInteger(duration) || duration <= 0);

        // Prompt for workout description
        description = prompt(`Enter a description for ${workoutName} (optional):`);

        // Call the addWorkout function with the entered values
        addWorkout(workoutName, duration, description);

        console.log('Workout Name:', workoutName);
        console.log('Duration:', duration);
        console.log('Description:', description);
    });
}





