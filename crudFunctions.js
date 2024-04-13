
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

export async function getActivities() {
    const db = await connectedDb; // Replace with your database name
    const rows = await db.all('SELECT activity_name FROM activities');
    return rows.map(row => row.activity_name);
}
  






