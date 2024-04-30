
// crudFunctions.js
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import uuid from 'uuid-random';

async function init() {
    console.log('Database migration starting');
    const db = await open({
        filename: './wingman.sqlite',
        driver: sqlite3.Database,
        verbose: true
    });
    await db.migrate({ migrationsPath:'./migrations-sqlite' });
    console.log('Database migration DONE');
    return db;
}

const connectedDb = init();
//getter functions
export async function getActivityNames() {
    const db = await connectedDb;
    const rows = await db.all('SELECT activity_name FROM activities');
    return rows.map(row => row.activity_name);
}

export async function getActivityTimes() {
    const db = await connectedDb;
    const rows = await db.all('SELECT activity_duration FROM activities');
    return rows.map(row => row.activity_name);
}

export async function getActivities() {
    const db = await connectedDb;
    const rows = await db.all('SELECT activity_name, activity_duration FROM activities');
    return rows;
}

export async function isUserGenerated(){
    const db = await connectedDb;
    const rows = await db.all('SELECT activity_user_generated FROM activities');
    return rows;

}

export function getActivityDetails(activityId) {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./wingman.sqlite');

        const sql = 'SELECT activity_name, activity_duration FROM activities WHERE id = ?';
        db.get(sql, [activityId], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });

        db.close();
    });
}

export async function getInfoPageData() {
    const db = await connectedDb;
    const rows = await db.all('SELECT activity_name, activity_duration, activity_description FROM activities');
    return rows;

}

//adder functions

export async function addActivity(activityName, activityDuration, activityDescription) {
    const db = await connectedDb;
    const id = uuid();

    const existingActivity = await db.get('SELECT id FROM activities WHERE activity_name = ?', [activityName]);

   if (existingActivity) {
        console.log('ERROR: Activity already exists in db!');
        return;
    }
    await db.run('INSERT INTO activities (id, activity_name, activity_duration, activity_description, activity_user_generated) VALUES (?, ?, ?, ?, ?)', [id, activityName, activityDuration, activityDescription, 1]);
}





