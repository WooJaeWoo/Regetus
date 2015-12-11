var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send("group index");
});

router.get('/:name', function(req, res, next) {
	res.send("group: " + req.params.name);
});

router.get('/new', function(req, res, next) {
	res.send("group new");
});

router.post('/new', function(req, res, next) {

});

router.get('/goal', function(req, res, next) {
	res.send("group goal");
});

router.post('/goal', function(req, res, next) {

});

module.exports = router;
