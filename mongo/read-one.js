//Including the required packages
var mongo = require('mongodb');
//Establishing the connection
var new_db = "mongodb://localhost:27017/demo_db"
								

//name of the file : read-one.js
mongo.connect(new_db , { useNewUrlParser: true },function(error , client){
	if (error){
		throw error;
    }
    
    var db = client.db('demo_db')
	//findOne() reads the first occurance of any data from the database.
	db.collection("details").findOne({}, (err , collection) => {
		if(err) throw err;
		console.log("Record Read successfully");
		console.log(collection);
		client.close();
	});
});
