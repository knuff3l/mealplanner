var express = require('express');
var router = express.Router();

var planerController = require('../controller/planerController');

/* GET home page. */
router.get('/',planerController.index);

module.exports = router;
