const express = require('express');
const router = express.Router();
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

// Home page
router.get('/', (req, res) => {
  res.render('pages/home', { title: 'Mini Messageboard', messages: messages });
});

// About page
router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

// New message
router.get('/new', (req, res) => {
    res.render('forms/newMessage', { title: 'New Page' });
});

router.post('/new', (req, res) => {
  const newMessageText = req.body.newMessage;
  const newMessageUser = req.body.newUser;

  messages.push({ text: newMessageText, user: newMessageUser, added: new Date() });

  res.redirect('/');
})

module.exports = router;