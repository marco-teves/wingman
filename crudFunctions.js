const db = require('./db.js');

//CREATE
const createItem = (activityName, activityDuration, activityDescription, callback) => {
    const sql = `INSERT INTO activities(activity_name, activity_duration, activity_description) VALUES(?, ?, ?)`;
    db.run(sql, [activityName, activityDuration, activityDescription], 
        (error) => {
            callback(error, {id: this.lastID});
        });
};

const readItems = (callback) => {
    const sql = `SELECT * FROM activities`;
    db.all(sql, [], (error, rows) => {
        callback(error, rows);
    });
}

const updateItem = (id, activityName, activityDuration, activityDescription, callback) => {
    const sql = `UPDATE activities SET activity_name = ?, activity_duration = ?, activity_description = ? WHERE id = ?`;
    db.run(sql, [activityName, activityDuration, activityDescription, id], (error) => {
        callback(error);
    });
}

const deleteItem = (id, callback) => {
    const sql = `DELETE FROM activities WHERE id = ?`;
    db.run(sql, [id], (error) => {
        callback(error);
    });
}