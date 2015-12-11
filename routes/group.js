var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
	res.render("group/form");
});

router.post('/new', function(req, res, next) {
	
});

router.get('/:id', function(req, res, next) {
	//res.send("group: " + req.params.id);
	res.render("group/index");
});

router.get('/:id/edit', function(req, res, next) {
	res.render("group/form");
});

router.post('/:id/edit', function(req, res, next) {
});

router.get('/:id/invitation', function(req, res, next) {
	//TODO: 가입하는 그룹 정보
	res.render("group/invitation");
});

router.post('/:id/invitation', function(req, res, next) {
	//TODO: DB에 그룹 가입 추가
	res.render("main");
});

router.get('/:id/plan', function(req, res, next) {
	res.render("group/plan");
});

router.post('/:id/plan', function(req, res, next) {
	//TODO: 계획 반영하기
});

router.get('/:id/read', function(req, res, next) {
	res.render("group/read");
});

module.exports = router;
