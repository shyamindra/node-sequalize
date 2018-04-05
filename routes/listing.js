var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.listing.create({
    name: req.body.name,
    description: req.body.description,
    tag_id: req.body.tag_id,
    range: req.body.range
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:listing_id/destroy', function(req, res) {
  models.listing.destroy({
    where: {
      id: req.params.listing_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;
