const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./wingman.db', sqlite3.OPEN_READWRITE, (error) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log(`Connected to the HIIT database: ${db}`);
        db.run('CREATE TABLE IF NOT EXISTS activities(id INTEGER PRIMARY KEY AUTOINCREMENT, activity_name NOT NULL VARCHAR(30), activity_duration INTEGER NOT NULL CHECK (activity_duration >= 0 AND activity_duration <= 60), activity_difficulty VARCHAR(30), activity_description TEXT NOT NULL)', 
        (error) => {
            if (error) {
                console.error(error.message);
            } else {
                console.log('Created activities table');
            }
        });
    }
});

module.exports = db;



//db.run(createPlaylistTable)





/* db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
}); */



