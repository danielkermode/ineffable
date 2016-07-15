const express = require('express');
const knex = require('../database/config').db;
const db = require('../database/utils')(knex);
const router = express.Router();

router.get('/', (req, res) => {
  db.getAll('users', (err, data) => {
    if(err) return console.error(err);
    res.json(data);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.findOne('users', { id }, (err, data) => {
    if(err) return console.error(err);
    res.json(data);
  });
});

module.exports = router;