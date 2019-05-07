const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let coordinateScheme = new Schema({
    nombre: {
        type: String
    },
    lat: {
        type: Number
    },
    lng: {
        type: Number
    }
});
module.exports = mongoose.model('Coordinate', coordinateScheme );