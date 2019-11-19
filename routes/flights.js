var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');


/* /Route responsible for showing a form for entering a movie  */
router.get('/',flightsCtrl.index);

router.get('/new', flightsCtrl.new);
 
router.post('/', flightsCtrl.create);

module.exports = router;
