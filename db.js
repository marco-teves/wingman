const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./hiitUsers.sql', sqlite3.OPEN_READWRITE, (error) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log(`Connected to the HIIT database: ${db}`);
    }
});

db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
});

