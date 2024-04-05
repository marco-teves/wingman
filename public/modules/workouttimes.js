const slider = document.getElementById('difficultySlider');
const sliderValue = parseInt(slider.value);


export let restTime;
if (sliderValue === 1) {
    restTime = 30;
} else if (sliderValue === 2) {
    restTime = 15;
} else if (sliderValue === 3) {
    restTime = 5;
} else { 
    restTime = 30;
};


export const workoutTimes = {
    'Push Ups': 2,
    'Plank Hold': 6,
    'Mountain Climbers': 7,
    'High Knees': 8,
    'Burpees': 1,
};
