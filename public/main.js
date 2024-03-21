
import { hideLoadScreen } from "./modules/loadscreen.js";
import { timerBtnListener, handleArrowIconClick, handleDropDownExitClick, scrollLeftRight } from "./modules/listeners.js";
import {dupeWorkoutItems} from "./modules/dupeitems.js";
import { handleDragging } from "./modules/draganddrop.js";

console.log("Start countdown function called.");

document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        hideLoadScreen();
    }, 1000);
    timerBtnListener();
    handleDropDownExitClick();
    handleArrowIconClick();
    /* const workoutNames = ["Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges","Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges","Push-ups", "Sit-ups", "Squats", "Jumping Jacks", "Plank", "Lunges"];
    dupeWorkoutItems(workoutNames); */
    scrollLeftRight();
    handleDragging();
    


});



