var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render("bibleParser");
});

router.post('/', function(req, res, next) {
	var contents = req.body.bible;
	console.log(contents);
	res.send("DONE");
});


module.exports = router;
