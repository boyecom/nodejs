var User= require("../controllers/usersControl");
var Onav=require('../controllers/mycart.collect.order');
var Show=require('../controllers/detail.showlist');
var passport = require('passport');
require('../../config/passport');
module.exports=function(app){
	app.get('/',User.login);
	app.get('/onlogin',User.onLogin);
	app.post("/login",passport.authenticate('local.login',{
        successRedirect:'/onlogin',
        failureRedirect:'/onlogin',
        failureFlash:true
    }));
	app.get("/logout",User.logout);
	

	app.get('/isUsername',User.isUsername);
	app.post("/register",User.register);
	

//settting
	app.get("/setting",User.settingGet);
	app.post("/setting",User.settingPOST);
	app.post('/getUserInfo',User.getUserInfo);

	app.get('/main',Onav.main);
	app.get('/mycar:t',Onav.mycart);//mycart
	app.param('t',Onav.mycartParam);
	app.get('/removeMycart',Onav.removeMycart);
	app.post("/submitMycart",Onav.submitMycart);
	app.get("/addMycart",Onav.addMycart);
	//app.post('/loadMycart',Onav.loadMycart);

	app.get('/kinds',Onav.kinds);
	app.post('/getkinds',Onav.getKinds);
	app.get('/collection',Onav.collection);
	app.get("/addcollection",Onav.addCollection);
	app.post('/loadcollection',Onav.loadCollection);
	app.get('/removecollection',Onav.removeCollection);
	app.get('/myorder',Onav.myorder);
	app.post('/getMyorder',Onav.getMyorder);


	app.param("goodsid",Show.getgoodsid);
	app.get("/detail/:goodsid",Show.detail);
	
	app.get("/showlist",Show.showlist);
	app.post("/getshowlist",Show.getShowlist);



	/*app.param("goodsid",function(req,res,next,goodsid){
	req.goodsid=goodsid;
	return next();
	});
	app.get('/detail/:goodsid',function(req,res){
		res.end('newsId:'+req.goodsid);
	});*/





	app.get('/import',Onav.importData);//数据导入，测试用
	

};