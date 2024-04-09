//listeners.js

import { startCountdown, isRunning, updateWorkoutArr, updateNamedArr } from './countdown.js';
import { browseOpen, menuOpen, error } from './audio.js';
import { deleteItem } from './draganddrop.js';
import { getNamedArray, getItemsInPlaylist, exerciseArr, getDifficulty } from './getters.js';

export function timerBtnListener() {
    const timerBtn = document.querySelector("#stop-watch-btn");
    
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

export function confirmBtn() {
  const confirmButton = document.getElementById('confirmWorkout');
  confirmButton.addEventListener('click', getItemsInPlaylist);
  confirmButton.addEventListener('click', getNamedArray);
}

export function difficultySlider(){
  document.getElementById('difficultySlider').addEventListener('oninput', getDifficulty());
}

export function saveBtn(){
  document.getElementById('save').addEventListener('click', function() {

    const playlistName = prompt('Enter playlist name:');
    const authorName = prompt('Enter author name:');

    console.log('Playlist Name:', playlistName);
    console.log('Author Name:', authorName);
  });
}


