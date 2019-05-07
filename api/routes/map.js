const express = require('express');
const axios = require('axios');
const app = express();

app.get('/map', (req, res) =>{
    
    res.render('../views/index'); 
});
module.exports = app;