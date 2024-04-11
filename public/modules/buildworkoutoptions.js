import {dragStart, touchStart, touchEnd, touchMove} from './draganddrop.js';


let nextItemId = 6; // Starting ID number for the first div to be added

export function addWorkout(workoutName) {
    const container = document.getElementById('options'); // Get the container where you want to add divs
    const className = 'workoutItem--created'
        
    const newActivity = document.createElement('div');
    
    newActivity.textContent = workoutName;
    newActivity.id = 'item' + nextItemId;
    newActivity.classList.add(className);
    newActivity.draggable = true;
    container.appendChild(newActivity);
    nextItemId++;
    newActivity.addEventListener('dragstart', dragStart);
    newActivity.addEventListener('touchstart', touchStart);
    newActivity.addEventListener('touchmove', touchMove);
    newActivity.addEventListener('touchend', touchEnd);
    

    
}
