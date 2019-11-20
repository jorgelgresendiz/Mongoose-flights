var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema ({
    seat: {
        type: String
    },
    price: {
        type: Number,
        min: 0
    },
    flight: {
        type: ObjectId,
        ref: 'Flight'
    }
})

module.exports = mongoose.model('Ticket', ticketSchema);
