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
    document.getElementById('difficultySlider').addEventListener('input', function() {
        let value = (this.value - this.min) / (this.max - this.min);
        let thumbWidth = 100; // Initial thumb width
        let thumbHoverWidth = 110; // Width on hover
        let newPosition = 75 * value - thumbWidth / 2; // Calculate thumb position

        this.style.background = 'linear-gradient(to right, #4CAF50 0%, #4CAF50 ' + value * 100 + '%, #d3d3d3 ' + value * 100 + '%, #d3d3d3 100%)';

        // Adjust thumb width and position based on value
        if (this.matches(':hover')) {
            this.style.setProperty('--thumb-width', thumbHoverWidth + 'px');
        } else {
            this.style.setProperty('--thumb-width', thumbWidth + 'px');
        }
        this.style.setProperty('--thumb-left', newPosition + 'px');
    });
}
