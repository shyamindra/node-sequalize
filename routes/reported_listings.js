var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.reported_listing.create({
    listing_id: req.body.listing_id,
    description: req.body.description,
    reported_by : req.body.reported_by
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:reported_listing_id/destroy', function(req, res) {
  models.reported_listing.destroy({
    where: {
      id: req.params.reported_listing_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
