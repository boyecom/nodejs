var express = require ("express");
var bodyParser =  require("body-parser");
var session = require('express-session');
var cookieParser = require('cookie-parser');
var mongodb = require('./config/mongoose');
var config = require("./config/config");
var logger = require('morgan');
var passport =require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var validator = require('express-validator');

var db = mongodb();
var app =express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(logger('dev'));
app.use(cookieParser());
app.use(validator());
app.engine('html', require('ejs').renderFile);
app.set("views",__dirname+"/views");
app.set("view engine","ejs");

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false, 
    cookie:{maxAge:180*60*1000} //store保存时间
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());



//路由  
require('./app/routes/routes')(app);

//404错误
app.use(function(req, res, next){
    res.status(404);
    try {
      //return res.json('Not Found');
       res.send('<h4>Not Found</h4> <a href="/main">返回首页</a>');
    } catch(e) {
      console.log(e)
      
    } 
});
//500错误 
app.use(function(err, req, res, next){
    if(!err) {return next()}
    res.status(500);
    try {
       res.send('<h4>500错误</h4> <a href="/main">返回首页</a>');
    } catch(e) {
      console.log('500 set header after sent');
    }
});


app.listen(config.port,function(){
	console.log("app started, listening on port:",config.port)
})

