
const hints = [
    // workout items info
    { element: document.getElementById('item1'), tooltipText: '10 reps of twisting ur balls, 10 seconds' },
    { element: document.getElementById('item2'), tooltipText: '10s duration' },
    { element: document.getElementById('item3'), tooltipText: '20s duration' },
    { element: document.getElementById('item4'), tooltipText: '50s duration' },
    { element: document.getElementById('item5'), tooltipText: '15s duration' },


    //utility buttons
    { element: document.getElementById('erase'), tooltipText: 'deletes all items from playlist' },
    { element: document.getElementById('save'), tooltipText: 'saves the current playlist' },
    /* { element: document.getElementById('browse'), tooltipText: 'browse user-generated playlists to try out' }, */
    
    
    { element: document.getElementById('difficultySlider'), tooltipText: 'adjust the difficulty of the workout'},

    { element: document.getElementById('confirmWorkout'), tooltipText: 'finalise the workout and start the timer'},
];

/* export function displayTooltip(element, tooltipText) {
    const hintInfo = document.getElementById('hintInfo');
    hintInfo.textContent = tooltipText;
}


export function hideTooltip() {
    const hintInfo = document.getElementById('hintInfo');
    hintInfo.textContent = '';
} */


/* export function initializeTooltips() {
    
    hints.forEach(function(item) {
        item.element.addEventListener('mouseenter', function() {
            displayTooltip(item.element, item.tooltipText);
        });

        item.element.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
} */
