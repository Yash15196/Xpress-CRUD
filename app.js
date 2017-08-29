let express =require('express');
let app=express();
let bodyParser=require('body-parser');
let mongoose=require('mongoose');

// connect to Mongoose

let add=require('./routes/add')


/*app.get('/',function(req,res){
	res.send('hello ');
});*/

 app.use('/add',add);


app.listen(3000);
console.log("Running on port 3000");

module.exports=app;