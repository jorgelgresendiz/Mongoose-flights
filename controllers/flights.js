var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, ticket) {
      console.log(ticket)
      res.render('flights/show', { title: 'Flight Details', flight, ticket });
    });
    })
  }

function index (req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights});
    });
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    });
};

function newFlight(req, res) {
   res.render('flights/new');  
};

