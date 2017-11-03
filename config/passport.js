var passport = require('passport');
var User=require("../app/models/usersModel");
var localStategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});                           

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//登录
passport.use('local.login',new localStategy({
    usernameField:'username',
    passwordField:'password',
    passReqToCallback:true  //此处为true，下面函数的参数才能有req
},function(req,username,password,done){
    
        var errors = req.validationErrors();
        if(errors){
		 return done(null);
        }
		console.log(username,password);
        try{
                User.findOne({'username':username},function(err,user){
                console.log('user=',user)
                if(err){ return done(err);}

                if(!user){
                    return done(null,false,{message:"用户名错误!"});
                }
                if(user.password!==password){
                    return done(null);
                }
                /*if(!user.validPassword(password)){
                    return done(null,false,{message:"密码错误!"});
                }*/
                console.log("登录验证通过");
                return done(null,user);
            });

        }catch(e){
            console.log('e=',e)
            return done(null);
        }
         

}));