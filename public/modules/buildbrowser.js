

export function buildPlaylist(){
    const playlistOptions = document.getElementById('playlistOptionsTemplate');
    for(let i = 0; i < 7; i++){
        const clone = playlistOptions.content.cloneNode(true);
        document.getElementById('browsePlaylists').appendChild(clone);
    }
}