const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./wingman.db', sqlite3.OPEN_READWRITE, (error) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log(`Connected to the HIIT database: ${db}`);
    }
});


const createUsersTable = 'CREATE TABLE users(id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL)';
const createPlaylistTable = 'CREATE TABLE playlist(id INTEGER PRIMARY KEY AUTOINCREMENT, playlist_name VARCHAR(30) NOT NULL, workout_array TEXT NOT NULL, author_name VARCHAR(30) NOT NULL)';

//db.run(createPlaylistTable)





db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
});



