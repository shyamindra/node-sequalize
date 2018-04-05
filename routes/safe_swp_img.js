var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.safe_swp_img.create({
    swp_info_id: req.body.swp_info_id,
    img: req.body.img
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:safe_swp_img_id/destroy', function(req, res) {
  models.safe_swp_img.destroy({
    where: {
      id: req.params.safe_swp_img_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
