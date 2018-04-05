var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.sub_category.create({
    name: req.body.name,
    description: req.body.description,
    parent_id: req.body.parent_id,
    icon: req.body.icon,
    img: req.body.img,
    category_id: req.body.ctegory_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:sub_category_id/destroy', function(req, res) {
  models.sub_category.destroy({
    where: {
      id: req.params.sub_category_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
