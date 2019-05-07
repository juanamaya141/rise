
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.render('home');
})
app.use(require('./coordinate'));
app.use(require('./user'));
app.use(require('./map'));
module.exports = app;