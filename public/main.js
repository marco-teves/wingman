
import { hideLoadScreen } from "./modules/loadscreen.js";
import { timerBtnListener, handleArrowIconClick, handleDropDownExitClick } from "./modules/listeners.js";
console.log("Start countdown function called.");

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        hideLoadScreen();
    }, 1000);
    timerBtnListener();
    handleDropDownExitClick();
    handleArrowIconClick();
    


});



