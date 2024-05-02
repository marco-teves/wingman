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

  if (playlist.children.length >= maxItemsInPlaylist) {
    console.log(`Maximum limit of ${maxItemsInPlaylist} items reached in the playlist.`);
    error.play();
    return;
  }

  if (draggedItem) {
    const clone = draggedItem.cloneNode(true);
    const textContent = clone.textContent.trim();
    console.log(`Item "${textContent}" dropped!`);
    playlist.appendChild(clone);
  } else {
    console.error('Dragged item not found.');
  }
}

let isSwiping = false;
let startTime;
let startX;
export function touchStart(event) {
  
  console.log('You touched an item!');
  startTime = Date.now();
  startX = event.touches[0].clientX;
  isSwiping = false;
}

export function touchMove(event) {
  const currentX = event.touches[0].clientX;
  const movementThreshold = 10;
  if (Math.abs(currentX - startX) > movementThreshold) {
    console.log('swipe detected, wont put it in playlist');
    isSwiping = true;
  }
}

export function touchEnd(event) {
  const endTime = Date.now();
  const holdTime = endTime - startTime;

  if (isSwiping) {
    console.log('Swiped on the element!');
    isSwiping = false;
  } else if (holdTime >= 250) {
    console.log('Element held for over 0.25 seconds!');

    const elem = event.target;

    const itemData = elem.id;
    const draggedItem = document.getElementById(itemData);
    const playlist = document.querySelector('.playlist');

    if (playlist.children.length >= maxItemsInPlaylist) {
      console.log(`Maximum limit of ${maxItemsInPlaylist} items reached in the playlist.`);
      error.play();
      return;
    }

    if (draggedItem) {
      const clone = draggedItem.cloneNode(true);
      const textContent = clone.textContent.trim();
      console.log(`Item "${textContent}" added!`);
      playlist.appendChild(clone);
    } else {
      console.error('Dragged item not found.');
    }
  } else {
    console.log('Touch ended before 0.25 seconds.');
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