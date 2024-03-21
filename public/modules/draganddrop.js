const draggables = document.querySelectorAll('.workoutItem');
const dropZone = document.querySelector('.playlist');

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
        if (draggedItem) {
            const clone = draggedItem.cloneNode(true);
            const textContent = clone.textContent.trim();
            console.log(`Item "${textContent}" dropped!`);
            dropZone.appendChild(clone);
        } else {
            console.error('Dragged item not found.');
        }
    }
    
}
