import { click } from './audio.js';
import { error } from './audio.js';

const draggables = document.querySelectorAll('.workoutItem');
const dropZone = document.querySelector('.playlist');
const maxItemsInPlaylist = 5;

export function handleDragging() {
    draggables.forEach(elem => {
        elem.addEventListener('dragstart', dragStart);
        // Add touch event listeners for mobile devices
        elem.addEventListener('touchstart', touchStart);
        elem.addEventListener('touchmove', touchMove);
        elem.addEventListener('touchend', touchEnd);
    });

    dropZone.addEventListener('dragover', dragOver);
    dropZone.addEventListener('drop', drop);
    dropZone.addEventListener('touchmove', touchMove); // Touch event for drop zone

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

    // Touch event functions for draggable items
    let activeElement;

    function touchStart(event) {
        console.log('touch start');
        event.preventDefault();
        event.stopPropagation();
        activeElement = event.target;
        const touch = event.touches[0];
        const offsetX = touch.clientX - event.target.getBoundingClientRect().left;
        const offsetY = touch.clientY - event.target.getBoundingClientRect().top;
        event.target.setAttribute('data-offset-x', offsetX);
        event.target.setAttribute('data-offset-y', offsetY);
        // Add a class for visual feedback
        event.target.classList.add('dragging');
    }

    function touchMove(event) {
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

    function touchEnd(event) {
        console.log('touch end');
        event.preventDefault();
        event.stopPropagation();
        activeElement.classList.remove('dragging');
        activeElement = null;
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
