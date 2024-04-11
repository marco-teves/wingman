

import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import uuid from 'uuid-random';

async function init() {
    const db = await open({
        filename: './database/wingman.sql', // Adjust the path as needed
        driver: sqlite3.Database,
        verbose: true
    });
    await db.migrate({ migrationsPath:'./migrations-sqlite' }); // Adjust the path as needed
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


