// ./routes.js

const express = require('express');

const router = express.Router();

const db = require('../db/models');


router.get('/', async (req, res) => {
  try {
    const books = await db.Book.findAll({
      order:
        [
          ['title', 'ASC']
        ]
    });
    res.render('index', { title: 'Home', books });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
