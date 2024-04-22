// getters.js

import { difficultyNames } from "./difficulties.js";
import { error } from "./audio.js";
let restTime = 0;
const readyTime = 3;
export let exerciseArr = [];
export let namedArr = [];

export async function getItemsInPlaylist() {
    exerciseArr = [];
    restTime = await getDifficulty();

    const response = await fetch('/workoutTimes');
    if (!response.ok) {
        throw new Error('Failed to fetch workout times');
    }
    const workoutTimes = await response.json();

    const playlist = document.querySelector('.playlist');
    const workoutItems = playlist.querySelectorAll('.workoutItem');

    let isFirstExercise = true;

    for (const workoutItem of workoutItems) {
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
    }
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



export async function getNamedArray() {
    namedArr = [];

    try {
        const response = await fetch('/workoutTimes');
        if (!response.ok) {
            throw new Error('Failed to fetch workout times');
        }
        const workoutTimes = await response.json();

        const playlist = document.querySelector('.playlist');
        const workoutItems = playlist.querySelectorAll('.workoutItem');
      
        let isFirstExercise = true;
        
        workoutItems.forEach(workoutItem => {
            const exerciseName = workoutItem.textContent.trim();
            if (exerciseName !== '') {
                if (isFirstExercise) {
                    namedArr.push('get ready!');
                    isFirstExercise = false;
                }
                namedArr.push(exerciseName.toLowerCase());
                namedArr.push("rest");
            } else {
                console.log('Could not find time for exercise:', exerciseName);
            }
        });
        namedArr.pop(); // Remove the extra "rest" added after the last exercise
        console.log('namedArr', namedArr);
    } catch (error) {
        console.error('Error fetching workout times:', error);
        // Handle error
    }
}


//gets the difficulty level from the slider and updates rest times and ui colors accordingly
async function getDifficulty() {
    const arrowIconColor = document.querySelector(".arrow-drop-down");
    const slider = document.getElementById('difficultySlider');
    const sliderValue = parseInt(slider.value);
    const difficultyName = difficultyNames[slider.value];
    console.log('Difficulty level:', difficultyName);

    arrowIconColor.style.fill = "";

    const stopwatchOutline = document.getElementById('circle-outline');
    stopwatchOutline.style.backgroundImage = "";

    const nextWorkoutColor = document.getElementById('displayNextWorkoutName');
    nextWorkoutColor.style.color = "";

    let restTime;
    if (sliderValue === 1) {
        console.log('difficulty green blue');
        stopwatchOutline.style.backgroundImage = "linear-gradient(#00FF00, #0000ff)";
        nextWorkoutColor.style.color = "rgba(0, 255, 4, 0.4)";
        arrowIconColor.style.fill = "rgba(0, 255, 4, 1)";

        restTime = 60;

    } else if (sliderValue === 2) {
        console.log('difficulty yellow orange');
        stopwatchOutline.style.backgroundImage = "linear-gradient(#FFFD00, #f93a00)";
        nextWorkoutColor.style.color = "rgba(255, 225, 0, 0.4)";
        arrowIconColor.style.fill = "rgba(255, 225, 0, 1)";

        restTime = 45;
        
    } else { 
        console.log('difficulty red pink');
        stopwatchOutline.style.backgroundImage = "linear-gradient(#FF007E, #FA1F00)";
        nextWorkoutColor.style.color = "rgba(255, 0, 0, 0.4)";
        arrowIconColor.style.fill = "rgba(255, 0, 0, 1)";

        restTime = 15;
    }

    return restTime;
}

