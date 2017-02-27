const express = require('express');

const router = express.Router();

let likes = 0;

router.get('/', (req, res) => {
  res.send('API home page');
});

router.post('/likes', (req, res) => {
  likes += 1;
  res.json({
    likes,
  });
});

router.get('/likes', (req, res) => {
  setTimeout(() => {
    res.json({
      likes,
    });
  }, Math.round(Math.random() * 5000));
});

module.exports = router;
