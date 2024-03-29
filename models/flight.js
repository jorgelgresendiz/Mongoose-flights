var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create Flight model/schema

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    arrival: {
        type: Date
    }
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
    type: Date,
    default: function() {
        return new Date.now() - 365*24*60*60*1000
        }
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    destinations: [destinationSchema] 
}, {
    timestamps: true
});

//compiling schema made into a model and exporting it
module.exports = mongoose.model('Flight', flightSchema);
