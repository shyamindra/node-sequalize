var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.category.create({
    name: req.body.name,
    description: req.body.description,
    icon: req.body.icon,
    img: req.body.img
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:category_id/destroy', function(req, res) {
  models.category.destroy({
    where: {
      id: req.params.category_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;
