// getters.js

import { difficultyNames } from "./difficulties.js";
import { workoutTimes } from './workouttimes.js'; // Importing the workoutTimes map
import { error } from "./audio.js";
let restTime = 0;
const readyTime = 3;
export let exerciseArr = [];
export let namedArr = [];

// converts the playlist items to an array of exercise times
export function getItemsInPlaylist() {
    exerciseArr = [];
    const playlist = document.querySelector('.playlist');
    const workoutItems = playlist.querySelectorAll('.workoutItem');

    let isFirstExercise = true;
    
    workoutItems.forEach(workoutItem => {
        const exerciseName = workoutItem.textContent.trim();
        
        const exerciseTime = workoutTimes[exerciseName];
        if (exerciseTime !== undefined) { 
            if (isFirstExercise) {
                exerciseArr.push(readyTime);
                isFirstExercise = false;
            }
        exerciseArr.push(exerciseTime);
        exerciseArr.push(restTime);
        } else {
            console.log('Could not find time for exercise:', exerciseName);
        }  
    });
    console.log('getters', exerciseArr);
    const btn = document.getElementById('confirmWorkout');
    if (exerciseArr.length === 0) {
        error.play();
        btn.classList.remove('flashRed');
        void btn.offsetWidth;
        btn.classList.add('flashRed');
        console.log('No exercises in playlist');
    }
    exerciseArr.pop();
}

export function getNamedArray() {
    namedArr = [];
    const playlist = document.querySelector('.playlist');
    const workoutItems = playlist.querySelectorAll('.workoutItem');
  
    let isFirstExercise = true; // Flag variable to track if it's the first exercise
    
    workoutItems.forEach(workoutItem => {
      const exerciseName = workoutItem.textContent.trim();
      if (exerciseName !== '') {
        if (isFirstExercise) {
          namedArr.push('get ready!');
          isFirstExercise = false; // Set the flag to false after adding "get ready!"
        }
        namedArr.push(exerciseName.toLowerCase());
        namedArr.push("rest");
      } else {
        console.log('Could not find time for exercise:', exerciseName);
      }
    });
    namedArr.pop(); // Remove the extra "rest" added after the last exercise
    console.log('namedArr', namedArr);
}



export function getDifficulty() {
    const slider = document.getElementById('difficultySlider');
    const sliderValue = parseInt(slider.value);
    const difficultyName = difficultyNames[slider.value];
    console.log('Difficulty level:', difficultyName);


    if (sliderValue === 1) {
     restTime = 5;
    } else if (sliderValue === 2) {
        restTime = 15;
    } else if (sliderValue === 3) {
        restTime = 5;
    } else { 
        restTime = 30;
    };

    
}
