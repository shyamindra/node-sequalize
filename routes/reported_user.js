var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.reported_user.create({
    user_id: req.body.user_id,
    reported_by: req.body.reported_by,
    description: req.body.description
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:reported_user_id/destroy', function(req, res) {
  models.reported_user.destroy({
    where: {
      id: req.params.reported_user_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
