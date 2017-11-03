var user=require("../models/usersModel");
//登录跳转页面
exports.onLogin = function (req, res, next) {
       
        /*user.findOne(req.body,function(err,user){
        	if (err) res.end("error");
        	if(user){//登录成功
        		console.log("ok");
                req.session.user = true;
        		res.end("ok");
        	}else{
        		res.end('error');
        	}
        });*/

     if(!req.isAuthenticated()) res.end("error");
     res.end("ok");
};
//登录
exports.login=function(req,res,next){
        res.render("login.html");     
}
//登出
exports.logout=function(req,res,next){
    req.logout();
    res.redirect("/main");
}


//用户注册，判断用户是否存在
exports.isUsername=function(req,res,next){
    user.findOne({username:req.query.username},function(err,user){
        if (err) res.end("error");
        if(user){
            res.end("exist");
        }else{
            res.end('no');
        }
    });
}
//用户注册
exports.register=function(req,res,next){
        var u= new user(req.body)
        u.save(function(err,data){
            if(err) res.end('err');
            res.end("ok")
        })
    
}
//设置页面
exports.settingGet=function(req,res,next){
    if(!req.isAuthenticated()) res.render("main.html",{user:null});
    res.render("setting.html",{user:res.user})
}
//获取页面用户信息
exports.getUserInfo=function(req,res,next){
    if(!req.isAuthenticated()) res.end("nologin");
    try{
        user.findOne({username:'admin'},function(err,user){
            if(err) res.end(error);
            if(user){
                console.log(user)
                res.json(user);
            }else{
                res.end('no');
            }
        })
    }catch(e){
        res.end("error")
    }

}
//保存设置
exports.settingPOST=function(req,res,next){
    if(!req.isAuthenticated()) res.end("nologin");
    user.update({username:'admin'},{$set:req.body},function(err,d){
        if(err) res.end('error');
        res.end("ok");
    })
}
