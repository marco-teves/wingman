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
    restTime = getDifficulty();
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



function getDifficulty() {
    const slider = document.getElementById('difficultySlider');
    const sliderValue = parseInt(slider.value);
    const difficultyName = difficultyNames[slider.value];
    console.log('Difficulty level:', difficultyName);

    const stopwatchOutline = document.getElementById('circle-outline');
    stopwatchOutline.style.backgroundImage = "";

    const nextWorkoutColor = document.getElementById('displayNextWorkoutName');
    nextWorkoutColor.style.color = "";

    if (sliderValue === 1) {
        console.log('difficulty green blue');
        stopwatchOutline.style.backgroundImage = "linear-gradient(#00FF00, #0000ff)";
        nextWorkoutColor.style.color = "rgba(0, 255, 4, 0.4)";

        return 60;
    } else if (sliderValue === 2) {
        console.log('difficulty yellow orange');
        stopwatchOutline.style.backgroundImage = "linear-gradient(#FFFD00, #f93a00)";
        nextWorkoutColor.style.color = "rgba(255, 225, 0, 0.4)";

        return 45;
    } else { 
        console.log('difficulty red pink');
        stopwatchOutline.style.backgroundImage = "linear-gradient(#FF007E, #FA1F00)";
        nextWorkoutColor.style.color = "rgba(255, 0, 0, 0.4)";

        return 15;
    };
}

