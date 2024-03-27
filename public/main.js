
import { hideLoadScreen } from "./modules/loadscreen.js";
import { timerBtnListener, handleArrowIconClick, deleteBtn } from "./modules/listeners.js";
import {dupeWorkoutItems} from "./modules/dupeitems.js";
import { handleDragging } from "./modules/draganddrop.js";
import { getItemsInPlaylist } from "./modules/getters.js";
import { scrollLeftRight, adjustDifficultySlider } from "./modules/animations.js";
import { initializeTooltips } from "./modules/hints.js";

// Initialize tooltips for elements


console.log("Start countdown function called.");

document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        hideLoadScreen();
    }, 1000);
    timerBtnListener();
    initializeTooltips();
    handleArrowIconClick();
    /* const workoutNames = ["Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges","Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges","Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges"];
    dupeWorkoutItems(workoutNames); */
    scrollLeftRight();
    adjustDifficultySlider();
    handleDragging();
    deleteBtn();
    const button = document.getElementById('confirmWorkout'); // Replace 'logButton' with the ID of your button
    button.addEventListener('click', getItemsInPlaylist);
    


});



