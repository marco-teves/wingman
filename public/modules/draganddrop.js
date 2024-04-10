import { click } from './audio.js';
import { error } from './audio.js';

const draggables = document.querySelectorAll('.workoutItem');
const dropZone = document.querySelector('.playlist');
const maxItemsInPlaylist = 5;
let activeElement = null; // Declare activeElement outside of functions

// Drag start function
export function dragStart(event) {
    console.log('item is dragging...');
    event.dataTransfer.setData('text', event.target.id);
}

// Drag over function
export function dragOver(event) {
    event.preventDefault();
    console.log('item is over drop zone...');
}

// Drop function
// Drop function
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
        ;
        const clone = draggedItem.cloneNode(true); // Clone the dragged item
        const textContent = clone.textContent.trim(); // Retrieve text content of the clone
        console.log(`Item "${textContent}" dropped!`); // Log the message with interpolated text content
        playlist.appendChild(clone);
    } else {
        console.error('Dragged item not found.');
    }
}


export function touchStart(event) {
    console.log('touch start'); // Log the touch start event
    event.preventDefault();
    event.stopPropagation();
  
    // Check if a touch is already active
    if (activeElement) return; // If yes, prevent further handling
  
    activeElement = event.target;
    const touch = event.touches[0];
    const offsetX = touch.clientX - event.target.getBoundingClientRect().left;
    const offsetY = touch.clientY - event.target.getBoundingClientRect().top;
    activeElement.setAttribute('data-offset-x', offsetX);
    activeElement.setAttribute('data-offset-y', offsetY);
    activeElement.classList.add('dragging');
  }
  
export function touchMove(event) {
    console.log('touch move');
    event.preventDefault();
    event.stopPropagation();
    if (!activeElement) return;
    const touch = event.touches[0];
    const offsetX = parseFloat(activeElement.getAttribute('data-offset-x'));
    const offsetY = parseFloat(activeElement.getAttribute('data-offset-y'));
    activeElement.style.left = touch.clientX - offsetX + 'px';
    activeElement.style.top = touch.clientY - offsetY + 'px';
}

// Touch end function
export function touchEnd(event) {
    console.log('touch end');
    event.preventDefault();
    event.stopPropagation();
    activeElement.classList.remove('dragging');
    activeElement = null;
}

export function handleDragging() {
    draggables.forEach(elem => {
        elem.addEventListener('dragstart', dragStart);
        
        elem.addEventListener('touchstart', touchStart);
        elem.addEventListener('touchmove', touchMove);
        elem.addEventListener('touchend', touchEnd);
    });

    // Ensure that dragover and drop event listeners are attached to dropZone
    dropZone.addEventListener('dragover', dragOver);
    dropZone.addEventListener('drop', drop);
}



export function deleteItem() {
    const playlist = document.querySelector('.playlist');
    while (playlist.firstChild) {
        playlist.removeChild(playlist.firstChild);
    }
    click.play();
    console.log('All items deleted from the playlist.');
}
