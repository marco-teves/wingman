export function getItemsInPlaylist() {
    const playlist = document.querySelector('.playlist');
    const workoutItems = playlist.querySelectorAll('.workoutItem');
    console.log('Workouts in playlist:');
    workoutItems.forEach(workoutItem => {
        console.log(workoutItem.textContent.trim());
    });
}