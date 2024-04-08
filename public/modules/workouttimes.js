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
    'Push Ups': 40,
    'Plank Hold': 45,
    'Mountain Climbers': 30,
    'High Knees': 60,
    'Burpees': 10,
};
