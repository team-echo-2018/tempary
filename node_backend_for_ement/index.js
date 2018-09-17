import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import mysql from 'mysql';
var login = require('./routes/loginroutes');


const app =express();
const router =express.Router();

app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(cors() && bodyParser.json());
/*
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'my_db'
  });
  
  app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin ,X-Requested-With,Content-Type,Accept");
    next();
    
  })*/
//testing router
  router.get('/',function(req,res){
    res.json({message:'welcome'});  
  });


//router to handle registration
router.post('/register',login.register);
router.post('/login',login.login)
app.use('/api', router);
console.log("server running on port 5000");

app.listen(5000);

 