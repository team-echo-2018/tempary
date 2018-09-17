const cors =require('cors');
const bodyParser =require('body-parser');
const mysql = require('mysql');
const express = require('express');
const http = require('http')
/*
import bodyParser from 'body-parser'
import mysql from 'mysql';
import { constants } from 'perf_hooks';
*/
/*
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import mysql from 'mysql';
import { constants } from 'perf_hooks';
*/
var login = require('./routes/loginroutes');


const app = express();
const router =express.Router();

app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(cors());
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000)
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
app.get('/', (req,res) => {
	res.send("hgello worls");
})
  


//router to handle registration
app.post('/register',login.register);
//router.post('/login',login.login)
app.post('/login', (req,res) =>{
  console.log("CAME HERE");
  login.login(req,res);
  
});
/*
app.use('/api', router);
console.log("server running on port 5000");

app.listen(5000);
*/

var server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})


 