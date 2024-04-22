//buildWorkoutOptions.js
import {dragStart, touchStart, touchMove, touchEnd} from './draganddrop.js';
let nextItemId = 1;
async function fetchActivities(){
    const response = await fetch('/activities');
    const activities = await response.json();
    return activities;
}
//build the default workoutOptions
export async function initOptions() {
    console.log('initOptions called');
    
    const container = document.getElementById('options');
    const className = 'workoutItem';

    const activityNames = await fetchActivities();
    console.log(activityNames);
    for (const workoutName of activityNames) {
        const initActivity = document.createElement('div');
        
        initActivity.classList.add(className);
        initActivity.id = 'item' + nextItemId;
        initActivity.draggable = true;
        initActivity.addEventListener('dragstart', dragStart);
        initActivity.addEventListener('touchstart', touchStart);
        initActivity.addEventListener('touchmove', touchMove);
        initActivity.addEventListener('touchend', touchEnd);

        // Create and append the <p> tag with id "workoutName"
        const workoutNameTag = document.createElement('p');
        workoutNameTag.textContent = workoutName;
        workoutNameTag.id = 'workoutName'; // Set the id
        initActivity.appendChild(workoutNameTag);

        const workoutDurationTag = document.createElement('p');
        workoutDurationTag.textContent = '10 s';
        workoutDurationTag.id = 'workoutName'; // Set the id
        initActivity.appendChild(workoutDurationTag);

        container.appendChild(initActivity);
        nextItemId++;  
    }
}


export function addWorkout(workoutName) {
    let addedItemId = nextItemId + 1;
    const container = document.getElementById('options'); // Get the container where you want to add divs
    const className = 'workoutItem--created'
        
    const newActivity = document.createElement('div');
    
    newActivity.textContent = workoutName;
    newActivity.id = 'item' + addedItemId;
    newActivity.classList.add(className);
    newActivity.draggable = true;
    container.appendChild(newActivity);
    addedItemId++;
    newActivity.addEventListener('dragstart', dragStart);
    newActivity.addEventListener('touchstart', touchStart);
    newActivity.addEventListener('touchmove', touchMove);
    newActivity.addEventListener('touchend', touchEnd);
    
}

