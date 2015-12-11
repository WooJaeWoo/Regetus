var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
	res.send("group new");
});

router.post('/new', function(req, res, next) {

});

router.get('/:groupName', function(req, res, next) {
	res.send("group: " + req.params.groupName);
});

router.get('/:groupName/edit', function(req, res, next) {

});

router.post('/:groupName/edit', function(req, res, next) {

});

router.get('/:groupName/invitation', function(req, res, next) {
	//TODO: 가입하는 그룹 정보
	res.render("invitation");
});

router.post('/:groupName/invitation', function(req, res, next) {
	//TODO: DB에 그룹 가입 추가
	res.render("main");
});

router.get('/:groupName/plan', function(req, res, next) {
	res.send("group plan");
});

router.post('/:groupName/plan', function(req, res, next) {
	//TODO: 계획 반영하기
});

module.exports = router;
