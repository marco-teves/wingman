
import { hideLoadScreen } from "./modules/loadscreen.js";
import { timerBtnListener,handleArrowIconClick, deleteBtn, confirmBtn, saveBtn, addBtn, socialIcons} from "./modules/listeners.js";
import {dupeWorkoutItems} from "./modules/dupeitems.js";


import { scrollLeftRight, adjustDifficultySlider} from "./modules/animations.js";
/* import { initializeTooltips } from "./modules/hints.js"; */
import { buildPlaylist } from "./modules/buildbrowser.js";
import { initOptions } from "./modules/buildworkoutoptions.js";

console.log("Start countdown function called.");

document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        hideLoadScreen();
    }, 1);
    timerBtnListener();
    
    /* initializeTooltips(); */
    handleArrowIconClick();
    /* handleBrowserButtonClickAndExit(); */
    /* const workoutNames = ["Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges","Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges","Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges"];
    dupeWorkoutItems(workoutNames); */
    scrollLeftRight();
    adjustDifficultySlider();
    deleteBtn();
    confirmBtn();
    saveBtn();
    /* difficultySlider(); */
    buildPlaylist();
    addBtn();
    initOptions();
    socialIcons();
});



