var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	
	res.render('add');
    /*console.log('add');*/

    var newname = req.query.name;
	var newdesc = req.query.description;
	console.log("new name: " + newname);
	console.log("new desc: " + newdesc);

	var newfriend = {"friends": [
		{
			"name": req.query.name,
			"description": req.query.description,
			"imageURL": "http://lorempixel/400/400/people"
		}
	]
}
 
	console.log("new friend added" + newfriend );
	data["friends"].push(newfriend);
	console.log("pushed" + data);
	res.render('add', data);


 };