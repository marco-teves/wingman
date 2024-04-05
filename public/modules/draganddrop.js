import {click} from './audio.js';

const draggables = document.querySelectorAll('.workoutItem');
const dropZone = document.querySelector('.playlist');
const maxItemsInPlaylist = 5;


export function handleDragging() {
    draggables.forEach(elem => {
        elem.addEventListener('dragstart', dragStart);
    });

    dropZone.addEventListener('dragover', dragOver);
    dropZone.addEventListener('drop', drop);

    function dragStart(event) {
        console.log('item is dragging...');
        event.dataTransfer.setData('text', event.target.id);
    }

    function dragOver(event) {
        event.preventDefault();
        console.log('item is over drop zone...');
    }

    function drop(event) {
        event.preventDefault();
        console.log('item dropped!');
        const itemData = event.dataTransfer.getData('text');
        const draggedItem = document.getElementById(itemData);
        const playlist = document.querySelector('.playlist');
    
        // Check if the maximum limit is reached
        if (playlist.children.length >= maxItemsInPlaylist) {
            console.log(`Maximum limit of ${maxItemsInPlaylist} items reached in the playlist.`);
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
    
}

export function deleteItem() {
    const playlist = document.querySelector('.playlist');
    while (playlist.firstChild) {
    playlist.removeChild(playlist.firstChild);
    }
    click.play();
    console.log('All items deleted from the playlist.');
}
