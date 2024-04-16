//draganddrop.js
import { click } from './audio.js';
import { error } from './audio.js';

const draggables = document.querySelectorAll('.workoutItem');
const dropZone = document.querySelector('.playlist');
const maxItemsInPlaylist = 15;

dropZone.addEventListener('dragover', dragOver);
dropZone.addEventListener('drop', drop);

  export function dragStart(event) {
    console.log('item is dragging...');
    event.dataTransfer.setData('text', event.target.id);
  }

  export function dragOver(event) {
      event.preventDefault();
      console.log('item is over drop zone...');
  }

  export function drop(event) {
      event.preventDefault();
      console.log('item dropped!');
      const itemData = event.dataTransfer.getData('text');
      const draggedItem = document.getElementById(itemData);
      const playlist = document.querySelector('.playlist');
  
      // Check if the maximum limit is reached
      if (playlist.children.length >= maxItemsInPlaylist) {
          console.log(`Maximum limit of ${maxItemsInPlaylist} items reached in the playlist.`);
          error.play();
          return; // Exit the function if limit is reached
      }

      if (draggedItem) {
          const clone = draggedItem.cloneNode(true); // Clone the dragged item
         const textContent = clone.textContent.trim(); // Retrieve text content of the clone
          console.log(`Item "${textContent}" dropped!`); // Log the message with interpolated text content
         playlist.appendChild(clone);
      } else {
          console.error('Dragged item not found.');
      }
}

let isSwiping = false;
let startTime;

function handleTouchDragging() {
    let initialX; // Variable to store initial touch X position
    draggables.forEach(elem => {
      elem.addEventListener('touchstart', (event) => {
        startTime = Date.now(); // Capture touch start timestamp
        initialX = event.touches[0].clientX; // Get initial touch X coordinate
      });
  
      elem.addEventListener('touchmove', (event) => {
        const currentX = event.touches[0].clientX;
        const movement = Math.abs(currentX - initialX); // Calculate movement in X direction
  
        // Adjust the threshold based on your needs (e.g., 50 pixels for a significant swipe)
        if (movement > 2) {
          isSwiping = true;
        }
      });
  
      elem.addEventListener('touchend', (event) => {
        const endTime = Date.now();
        const holdTime = endTime - startTime;
  
        if (holdTime >= 250 && !isSwiping) { // Check if hold time is over 1 second and no swipe detected
          console.log('Element held for over 1 second!');
  
          // Similar logic to drop function here (assuming each draggable element has a unique ID):
          const itemData = elem.id;
          const draggedItem = document.getElementById(itemData);
          const playlist = document.querySelector('.playlist');
  
          // Check if the maximum limit is reached (assuming you have a variable `maxItemsInPlaylist`)
          if (playlist.children.length >= maxItemsInPlaylist) {
            console.log(`Maximum limit of ${maxItemsInPlaylist} items reached in the playlist.`);
            error.play(); // Assuming you have an error sound effect or similar
            return;
          }
  
          if (draggedItem) {
            const clone = draggedItem.cloneNode(true); // Clone the dragged item
            const textContent = clone.textContent.trim(); // Retrieve text content of the clone
            console.log(`Item "${textContent}" added!`); // Log the message with interpolated text content
            playlist.appendChild(clone);
          } else {
            console.error('Dragged item not found.');
          }
  
        } else {
          console.log(isSwiping ? 'Swiped.' : 'Touch ended before 1 second.');
        }
  
        // Reset swipe tracking for next touch interaction
        isSwiping = false;
      });
    });
  }

export function deleteItem() {
    const playlist = document.querySelector('.playlist');
    while (playlist.firstChild) {
    playlist.removeChild(playlist.firstChild);
    }
    click.play();
    console.log('All items deleted from the playlist.');
}