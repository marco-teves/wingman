// getters.js

import { difficultyNames } from "./difficulties.js";
import { workoutTimes } from './workouttimes.js'; // Importing the workoutTimes map
import { error } from "./audio.js";
let restTime = 0;

export let exerciseArr = [];


// converts the playlist items to an array of exercise times
export function getItemsInPlaylist() {
    exerciseArr = [];
    const playlist = document.querySelector('.playlist');
    const workoutItems = playlist.querySelectorAll('.workoutItem');

    workoutItems.forEach(workoutItem => {
        const exerciseName = workoutItem.textContent.trim();
        const exerciseTime = workoutTimes[exerciseName];
        if (exerciseTime !== undefined) { 
            exerciseArr.push(exerciseTime);
            exerciseArr.push(restTime);
            console.log('getters', exerciseArr);
        } else {
            console.log('Could not find time for exercise:', exerciseName);
        }

    });

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


//export { exerciseArr };




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
