
const hints = [
    // workout items info
    { element: document.getElementById('item1'), tooltipText: '10 reps of twisting ur balls, 10 seconds' },
    { element: document.getElementById('item2'), tooltipText: 'sussyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy' },


    //utility buttons
    { element: document.getElementById('erase'), tooltipText: 'deletes all items from playlist' },
    { element: document.getElementById('save'), tooltipText: 'saves the current playlist' },
    { element: document.getElementById('browse'), tooltipText: 'browse user-generated playlists to try out' },
    
    
    { element: document.getElementById('difficultySlider'), tooltipText: 'adjust the difficulty of the workout'},
];

export function displayTooltip(element, tooltipText) {
    const hintInfo = document.getElementById('hintInfo');
    hintInfo.textContent = tooltipText;
}


export function hideTooltip() {
    const hintInfo = document.getElementById('hintInfo');
    hintInfo.textContent = 'hover over stuff to see more info!';
}


export function initializeTooltips() {
    
    hints.forEach(function(item) {
        item.element.addEventListener('mouseenter', function() {
            displayTooltip(item.element, item.tooltipText);
        });

        item.element.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
}
