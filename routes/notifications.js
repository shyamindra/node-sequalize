var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.notifications.create({
    name: req.body.name,
    description: req.body.description,
    user_id: req.body.user_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:notification_id/destroy', function(req, res) {
  models.notifications.destroy({
    where: {
      id: req.params.notification_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
