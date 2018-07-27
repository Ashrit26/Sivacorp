/*var user = require('../models/user');

exports.login_list = function(req, res) {
	
	user.find({email: req.body.email}, 'email password')
    .exec(function (err, list_users) {
      if (err) 	{ console.log("incorrect email"); }
      //Successful, so render
	else
		{if(req.body.password.equals(list_users.password) != true) {
		 console.log("incorrect password");
		}
res.redirect('/login_list');



    }
    
};*/

	

