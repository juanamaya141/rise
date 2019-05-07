const express = require('express');
const app = express();
const Coordinate = require('../models/coordinate');
const axios = require('axios');


/*====================
    END POINTS
======================*/
app.get('/getAll', (req, res) => {
        
    Coordinate.find({}, function(err, users) {
        var userMap = {};
    
        users.forEach(function(user) {
          userMap[user._id] = user;
        });
    
        res.send(userMap);  
      });
});
app.get('/coordinates', (req, res) => {
    axios.get('https://www.datos.gov.co/resource/ffwn-j5cw.json')
    .then(function(response) {
        let coordinates = [];
        
        response.data.forEach(function(element) {
            let nombre = element.nombre_de_la_zona_wifi;

            //se obtienen las coordenadas en grados para insertarlos en la DB
            let coordinate = element.coordenadas_aps.match(/\d+(\.\d+)?/g);
            lat = parseFloat(coordinate[0]) + parseFloat(coordinate[1]) / 60 + parseFloat(coordinate[2]) / 3600;
            lng = (parseFloat(coordinate[3]) + parseFloat(coordinate[4]) / 60 + parseFloat(coordinate[5]) / 3600) * -1;
            let temp = {
                nombre,
                lat, 
                lng

            };
            coordinates.push(temp);
        });
        Coordinate.remove({}, function(err) { 
            console.log('collection removed') 
         });
        Coordinate.insertMany(coordinates);
        res.render('home');
    });  
});

 
module.exports = app;