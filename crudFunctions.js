
// crudFunctions.js
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import uuid from 'uuid-random';

async function init() {
    console.log('Database migration starting');
    const db = await open({
        filename: './database/wingman.sqlite',
        driver: sqlite3.Database,
        verbose: true
    });
    await db.migrate({ migrationsPath:'./migrations-sqlite' });
    console.log('Database migration DONE');
    return db;
}

const connectedDb = init();

export async function readTable(tableName) {
    const db = await connectedDb;
    try {
        const rows = await db.all(`SELECT * FROM ${tableName}`);
        return rows;
    } catch (error) {
        console.error('Error reading table:', error);
        throw error;
    }
}

export async function addActivity(activityName, activityDuration, activityDesc) {
    const db = await connectedDb;
    const id = uuid();
    try{
        await db.run('INSERT INTO Exercises VALUES (?, ?, ?, ?)', [id, activityName, activityDuration, activityDesc]);
        return readTable('Exercises');
    } catch (error) {
        console.error('Error adding activity:', error);
        throw error;
    }
    
}




