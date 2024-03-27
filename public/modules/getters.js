import { click } from "./audio.js";
import { difficultyNames } from "./difficulties.js";

export function getItemsInPlaylist() {
    const playlist = document.querySelector('.playlist');
    const workoutItems = playlist.querySelectorAll('.workoutItem');

    const slider = document.getElementById('difficultySlider');
    
    const difficultyName = difficultyNames[slider.value];

    console.log('Workouts in playlist:');
    workoutItems.forEach(workoutItem => {
        console.log(workoutItem.textContent.trim());
    });

    console.log('Difficulty level:', difficultyName);
    click.play();
}