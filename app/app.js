const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes');
const path = require('path');
const PORT = process.env.PORT || 3000;

var app = express()

nunjucks.configure(path.join(__dirname, 'views'),  {
  autoescape: true,
  express: app
})

app.set('view engine', 'html')

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})