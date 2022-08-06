
const { query } = require('express');
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

toDoListRouter.post('/', (req, res) => {
    let queryText = `
        INSERT INTO "toDoList" ("task")
        VALUES ($1);`;
    let queryValues = [
        req.body.task,
    ]
    console.log(req.body)
    pool.query(queryText, queryValues)
        .then( result => {
            res.sendStatus(200);
        }).catch( (err) => {
            console.log(err)
            res.sendStatus(500) //send 500
        })
});
// PUT

// DELETE

toDoListRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);

    const queryText = `
    DELETE FROM "toDoList"
    WHERE "id" = $1;
    `;
    pool.query(queryText, [id])
        .then( (result) => {
            res.sendStatus(200);
        }).catch( (err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

module.exports = toDoListRouter;

// koalaRouter.delete('/:id', (req, res) => {
//     const id = req.params.id
//     console.log(id);
    
//     const queryText = 
//     `
//     DELETE FROM "koalas"
//     WHERE "id" = $1;
//     `;
//     pool.query(queryText, [id])
//         .then( (result) => {
//             res.sendStatus(200);
//         }).catch( (err) => {
//             console.log(err);
//             res.sendStatus(500);
//         });
// })