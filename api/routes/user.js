const express = require('express');
const app = express();
const Usuario = require('../models/coordinate');


/*====================
    END POINTS
======================*/



app.get('/users', (req, res) => {
    
});
app.post('/user', (req, res) => {
    let usuario = new Usuario({
        
    });
    res.json({ok: true});
});
 
module.exports = app;