var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.listing_img.create({
    listing_id: req.body.listing_id,
    img: req.body.img
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:listing_img_id/destroy', function(req, res) {
  models.listing_img.destroy({
    where: {
      id: req.params.listing_img_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
