var user = require('../models/user');

exports.signup_list = function(req, res) {

	new user({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	}).save(function(err, doc){
		if(err) res.json(err);
		else res.redirect('/login');
	});
};

