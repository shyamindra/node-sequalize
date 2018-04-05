var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
  models.message.create({
    message: req.body.message,
    from_usr: req.body.from_usr_id,
    to_usr: req.body.to_usr_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:message_id/destroy', function(req, res) {
  models.message.destroy({
    where: {
      id: req.params.message_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;
