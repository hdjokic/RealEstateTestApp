"use strict";

var express = require('express');

var router = express.Router();
router.post('/', function (req, res) {
  console.log(req.body);
  res.send("Data received");
});
router.post('/add', function (req, res) {
  console.log(req.body);
  res.send("Data received");
});
module.exports = router;
//# sourceMappingURL=index.dev.js.map
