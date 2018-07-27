var express = require('express');
var router = express.Router();

// Require controller modules.
var signup_controller = require('../controllers/signupController');
var login_controller = require('../controllers/loginController');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	res.render('home', {
		title: 'Home'
	});
});

router.get('/generic', function(req, res){
  res.render('generic', { title: 'generic' });
});

router.get('/elements', function(req, res){
  res.render('elements', { title: 'elements' });
});



module.exports = router;
