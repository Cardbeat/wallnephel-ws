const express = require('express')
const router = express.Router()
const keys = require('../../../Keys')

router.post('/admin', function(req, res) {
  // logic login
   if(req.body.name === keys.login.name && req.body.password === keys.login.password) {
     res.send(true)
   } else {
     res.send(false)
   }
  });


module.exports = router;