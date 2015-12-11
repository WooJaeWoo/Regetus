var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
	res.send("group new");
});

router.post('/new', function(req, res, next) {

});

router.get('/:id', function(req, res, next) {
	res.send("group: " + req.params.id);
});

router.get('/:id/edit', function(req, res, next) {

});

router.post('/:id/edit', function(req, res, next) {

});

router.get('/:id/invitation', function(req, res, next) {
	//TODO: 가입하는 그룹 정보
	res.render("invitation");
});

router.post('/:id/invitation', function(req, res, next) {
	//TODO: DB에 그룹 가입 추가
	res.render("main");
});

router.get('/:id/plan', function(req, res, next) {
	res.send("group plan");
});

router.post('/:id/plan', function(req, res, next) {
	//TODO: 계획 반영하기
});

module.exports = router;
