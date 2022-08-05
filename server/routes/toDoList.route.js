const express = require('express');
const toDoListRouter = express.Router();

// DB CONNECTION
const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
};

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('posgresql connected')
});
pool.on('error', (error) => {
    console.log('Error connecting to database', error);
});

// GET

toDoListRouter.get('/', (req, res) => {
    console.log('in GET');
    let queryText = `
    SELECT * FROM "toDoList";
    `;

    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('Error in toDoListRouter.get in toDoList.route.js', error)
    });
});

// POST
// PUT
// DELETE


module.exports = toDoListRouter;
