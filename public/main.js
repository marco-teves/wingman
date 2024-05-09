
import { hideLoadScreen } from './modules/loadscreen.js';
import { timerBtnListener,handleArrowIconClick, deleteBtn, confirmBtn, saveBtn, addBtn, socialIcons} from './modules/listeners.js';
import {dupeWorkoutItems} from './modules/dupeitems.js';


import { scrollLeftRight, adjustDifficultySlider} from './modules/animations.js';
import { buildInfoBrowser } from './modules/buildbrowser.js';
import { initOptions } from './modules/buildworkoutoptions.js';

console.log('Start countdown function called.');

document.addEventListener('DOMContentLoaded', function() {
    
    
    hideLoadScreen();
    
    timerBtnListener();
    handleArrowIconClick();
    scrollLeftRight();
    adjustDifficultySlider();
    deleteBtn();
    confirmBtn();
    saveBtn();
    buildInfoBrowser();
    addBtn();
    initOptions();
    socialIcons();
});



