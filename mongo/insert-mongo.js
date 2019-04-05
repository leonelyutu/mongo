//Name of the file  : insert-mongo.js
//Including the required packages
var mongo = require('mongodb');
//Establishing the connection
var new_db = "mongodb://localhost:27017/demo_db"
								

mongo.connect(new_db , { useNewUrlParser: true },function(error , client){
	if (error){
		throw error;
	}
	
	var db = client.db('demo_db')

	var data = { name : "Oscarito" , age : "25" , mobile : "0987654321" }
	
	db.collection("details").insertOne(data, (err , collection) => {
		if(err) throw err;
		console.log("Record inserted successfully");
		console.log(collection);
	});
});
		