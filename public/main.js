
import { hideLoadScreen } from "./modules/loadscreen.js";
import { timerBtnListener, handleBrowserButtonClickAndExit, handleArrowIconClick, deleteBtn, confirmBtn, saveBtn, addBtn, difficultySlider} from "./modules/listeners.js";
import {dupeWorkoutItems} from "./modules/dupeitems.js";
import { handleDragging } from "./modules/draganddrop.js";
import { getDifficulty } from "./modules/getters.js";
import { scrollLeftRight, adjustDifficultySlider } from "./modules/animations.js";
import { initializeTooltips } from "./modules/hints.js";
import { buildPlaylist } from "./modules/buildbrowser.js";
import { addWorkout } from "./modules/buildworkoutoptions.js";

console.log("Start countdown function called.");

document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        hideLoadScreen();
    }, 1);
    timerBtnListener();
    
    initializeTooltips();
    handleArrowIconClick();
    handleBrowserButtonClickAndExit();
    /* const workoutNames = ["Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges","Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges","Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges"];
    dupeWorkoutItems(workoutNames); */
    scrollLeftRight();
    adjustDifficultySlider();
    handleDragging();
    deleteBtn();
    confirmBtn();
    saveBtn();
    difficultySlider();
    buildPlaylist();
    addBtn();
});



