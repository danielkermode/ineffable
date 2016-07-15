const express = require('express');
const knex = require('../database/config').db;
const db = require('../database/utils')(knex);
const router = express.Router();

router.get('/', (req, res) => {
  db.getAll('profiles', (err, data) => {
    if(err) return console.error(err);
    res.json(data);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.findOne('profiles', { id }, (err, data) => {
    if(err) {
      console.error(err);
      res.status(404).json({ status: 404, message: err.message })
      return;
    };
    res.json(data);
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const toUpdate = req.body;
  db.update('profiles', { id }, toUpdate, (err, data) => {
    if(err) {
      console.error(err);
      res.status(400).json({ status: 400, message: err.message, code: err.code })
      return;
    };
    res.json(data);
  });
});

router.post('/', (req, res) => {
  const twoWords = /^\b\w+\b\s\b\w+\b$/;
  const toCreate = req.body;
  if(!toCreate.description.match(twoWords)) {
    const error = {
      status: 400,
      message: 'Description must have two words'
    };
    res.status(400).json(error);
    return;
  }
  db.add('profiles', toCreate, (err, data) => {
    if(err) {
      console.error(err);
      res.status(400).json({ status: 400, message: err.message, code: err.code })
      return;
    };
    res.json(data);
  });
});


module.exports = router;
