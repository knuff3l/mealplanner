var express = require('express');
var router = express.Router();

var rezepteController = require('../controller/rezepteController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//     // res.render('');
//     res.send('In Arbeit')
// });

router.get('/',rezepteController.index);

router.get('/detail/:id',rezepteController.detailPage);
module.exports = router;
