const express = require('express')
const router = express.Router()

router.post('/admin', function(req, res) {
    console.log(req.body)
  });


module.exports = router;