const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home' });
});

// About page
router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

module.exports = router;