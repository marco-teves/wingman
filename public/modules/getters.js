// getters.js

import { difficultyNames } from "./difficulties.js";
import { workoutTimes } from './workouttimes.js'; // Importing the workoutTimes map

let restTime = 5;

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
            //console.log(exerciseArr)
        } else {
            console.log('Could not find time for exercise:', exerciseName);
        }
    });
    exerciseArr.pop();
    console.log('getters', exerciseArr)

}

//export { exerciseArr };




export function getDifficulty() {
    const slider = document.getElementById('difficultySlider');
    const difficultyName = difficultyNames[slider.value];
    console.log('Difficulty level:', difficultyName);
    
}
