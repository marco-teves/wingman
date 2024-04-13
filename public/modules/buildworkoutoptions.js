//buildWorkoutOptions.js
import {dragStart} from './draganddrop.js';

async function fetchActivities(){
    const response = await fetch('/activities');
    const activities = await response.json();
    return activities;
}
//build the default workoutOptions
export async function initOptions() {
    console.log('initOptions called');
    let nextItemId = 1;
    const container = document.getElementById('options');
    const className = 'workoutItem';

    const activityNames = await fetchActivities();
    console.log(activityNames);
    for (const workoutName of activityNames) {
        const initActivity = document.createElement('div');
        initActivity.textContent = workoutName;
        initActivity.classList.add(className);
        initActivity.id = 'item' + nextItemId;
        
        initActivity.draggable = true;
        initActivity.addEventListener('dragstart', dragStart);
        container.appendChild(initActivity);
        nextItemId++;
        
        
  }
}

export function addWorkout(workoutName) {
    let nextItemId = 6;
    const container = document.getElementById('options'); // Get the container where you want to add divs
    const className = 'workoutItem--created'
        
    const newActivity = document.createElement('div');
    
    newActivity.textContent = workoutName;
    newActivity.id = 'item' + nextItemId;
    newActivity.classList.add(className);
    newActivity.draggable = true;
    container.appendChild(newActivity);
    nextItemId++;
    newActivity.addEventListener('dragstart', handleDragging);
    
}

