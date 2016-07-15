const express = require('express');
const knex = require('../database/config').db;
const db = require('../database/utils')(knex);
const router = express.Router();

router.get('/', (req, res) => {
  db.getAll('statuses', (err, data) => {
    if(err) return console.error(err);
    res.json(data);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.findOne('statuses', { id }, (err, data) => {
    if(err) {
      console.error(err);
      res.status(404).json({ status: 404, message: err.message, code: err.code  })
      return;
    };
    res.json(data);
  });
});

router.post('/', (req, res) => {
  const status = req.body;
  db.add('statuses', status, (err, data) => {
    if(err) {
      console.error(err);
      res.status(400).json({ status: 400, message: err.message, code: err.code })
      return;
    };
    res.json(data);
  });
});

module.exports = router;