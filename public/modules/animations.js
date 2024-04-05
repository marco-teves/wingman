import { click } from "./audio.js";
import { difficultyNames } from "./difficulties.js";


export function scrollLeftRight() {
    const options = document.querySelector('.options');
  
    options.addEventListener('wheel', function(event) {
        if (event.deltaY !== 0) {
            // Adjust the scroll amount to make it scroll less per wheel event
            const scrollAmount = event.deltaY * 3; // You can adjust the multiplier as needed
  
            // Smoothly scroll horizontally with reduced scroll amount
            options.scrollTo({
                left: options.scrollLeft + scrollAmount,
                behavior: 'smooth' // You can also try 'auto' or 'instant' for different scrolling behaviors
            });
  
            // Prevent the default vertical scrolling behavior
            event.preventDefault();
        }
    });
}

export function adjustDifficultySlider() {
    const slider = document.getElementById('difficultySlider');
    const confirmBtn = document.getElementById('confirmWorkout');
    slider.addEventListener('input', function() {
        click.play();
        const difficultyName = difficultyNames[slider.value];
        if (slider.value === '1') {
            slider.style.setProperty('--thumb-color', 'green');
            confirmBtn.style.setProperty('--btn-color', 'green');
            console.log("Difficulty level:", difficultyName);
        } else if (slider.value === '2') {
            slider.style.setProperty('--thumb-color', 'yellow');
            confirmBtn.style.setProperty('--btn-color', 'yellow');
            console.log("Difficulty level:", difficultyName);
        } else if (slider.value === '3') {
            slider.style.setProperty('--thumb-color', 'red');
            confirmBtn.style.setProperty('--btn-color', 'red');
            console.log("Difficulty level:", difficultyName);
        }
    });
}

