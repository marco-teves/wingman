//buildWorkoutOptions.js
import {dragStart, touchStart, touchMove, touchEnd} from './draganddrop.js';
let nextItemId = 1;
async function fetchActivities(){
    const response = await fetch('/activities');
    const activities = await response.json();
    return activities;
}
async function fetchWorkoutTimes() {
    const response = await fetch('/workoutTimes');
    const workoutTimes = await response.json();
    return workoutTimes;
}


async function fetchUserGenerated(){
    const response = await fetch('/isUserGenerated');
    const isUserGenerated = await response.json();
    return isUserGenerated;
}

export async function initOptions() {
    console.log('initOptions called');

    const container = document.getElementById('options');

    try {
        const activityNames = await fetchActivities();
        const workoutTimes = await fetchWorkoutTimes();
        const userGenerated = await fetchUserGenerated();

        console.log(activityNames);
        for (let i = 0; i < activityNames.length; i++) {
            const workoutName = activityNames[i];
            const isUserGenerated = userGenerated[i].activity_user_generated;

            const initActivity = document.createElement('div');
            const className = isUserGenerated ? 'workoutItem--created' : 'workoutItem';

            initActivity.classList.add(className);
            initActivity.id = 'item' + nextItemId;
            initActivity.draggable = true;
            initActivity.addEventListener('dragstart', dragStart);
            initActivity.addEventListener('touchstart', touchStart);
            initActivity.addEventListener('touchmove', touchMove);
            initActivity.addEventListener('touchend', touchEnd);

            const workoutNameTag = document.createElement('p');
            workoutNameTag.textContent = workoutName;
            workoutNameTag.id = 'workoutName';
            initActivity.appendChild(workoutNameTag);

            const workoutDuration = workoutTimes[workoutName];
            if (workoutDuration !== undefined) {
                const workoutDurationTag = document.createElement('p');
                workoutDurationTag.textContent = workoutDuration + ' s';
                workoutDurationTag.id = 'workoutDuration';
                initActivity.appendChild(workoutDurationTag);
            } else {
                console.log('Could not find duration for workout:', workoutName);
            };
            container.appendChild(initActivity);
            nextItemId++;
        };
    } catch (error) {
        console.error('Error initializing options:', error);
    };
};



export function addWorkout(workoutName, duration) {
    let addedItemId = nextItemId + 1;
    const container = document.getElementById('options');
    const className = 'workoutItem--created'
        
    const newActivity = document.createElement('div');
    newActivity.classList.add(className);
    newActivity.draggable = true;


    const workoutNameTag = document.createElement('p');
    workoutNameTag.textContent = workoutName;
    workoutNameTag.id = 'workoutName';
    newActivity.appendChild(workoutNameTag);


    newActivity.classList.add(className);
    const workoutDurationTag = document.createElement('p');
    workoutDurationTag.textContent = duration + ' s';
    workoutDurationTag.id = 'workoutDuration';
    newActivity.appendChild(workoutDurationTag);

    container.appendChild(newActivity);
    addedItemId++;
    newActivity.addEventListener('dragstart', dragStart);
    newActivity.addEventListener('touchstart', touchStart);
    newActivity.addEventListener('touchmove', touchMove);
    newActivity.addEventListener('touchend', touchEnd);
    
};

