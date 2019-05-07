/*=====================
    IMPORTACIONES

======================*/

const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const hbs = require('hbs');
const app = express();
hbs.registerPartials('views');
app.set('view engine', 'hbs');
/*===================
    CONEXION A MONGO
=====================*/

mongoose.connect('mongodb://localhost:27017/rise', {useNewUrlParser: true});



/*====================
    MIDDLEWARES
======================*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/*=================================
    IMPORTACIÓN DE LAS RUTAS
===========================*/
app.use(require('./routes/index'));


app.listen(3000);