const mysql = require('mysql');

export class MariaDB {
    constructor() {
        this._conn = mysql.createPool({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: 'portx'
        })
    }

    static initializeDataBase () {
        const conn = mysql.createPool({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        })

        if (conn) {
            conn.query('CREATE DATABASE IF NOT EXISTS portx', (err) => {
                if (err) {
                    console.log('Create Database Error');
                }
            })
        }
    }

    initializeTable () {
        const _conn = this._conn

        if (_conn) {
            _conn.query('CREATE TABLE IF NOT EXISTS members (name VARCHAR(255), address VARCHAR(255));', (err) => {
                if (err) {
                    console.log('Create Table Error');
                    console.log(err)
                }
            })
            // await _conn.query('CREATE TABLE IF NOT EXISTS member (ID INT NOT NULL AUTO_INCREMENT, EMAIL VARCHAR(255) NOT NULL, PASSWORD VARCHAR(255) NOT NULL, DATE DATE NOT NULL)');
        }
    }
}
