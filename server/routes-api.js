const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('API home page');
});

router.get('/likes', (req, res) => {
  res.send('API likes');
});

module.exports = router;
