var Mycart=require("../models/mycartModel");
var Goods=require("../models/goodsModel");
var Data=require("../../config/data");
var Myorder=require("../models/myorderModel");
var Collection=require("../models/collectionModel");
exports.importData=function(req,res,next){
	//Data.importfd();
	//res.end("importData");
	Data.importGoods(res);
	
	
};
//首页
exports.main=function(req,res,next){
	var retdata = require("../../config/maindata");
	if(!req.isAuthenticated()) res.render("main.html",{user:null,d:retdata});
    res.render("main.html",{user:req.user,d:retdata});
}

//购物车
exports.mycartParam=function(req,res,next,param){
	//console.log("param=",param)
	if(!req.isAuthenticated()) res.redirect("/?onclick=mycart");
	var username=req.user.username;
	Mycart.find({username:username},function(err,d){
			if(err){
				req.retdata=[]
				return next();
			}else{
				var retdata=[];
				for(var i in d){
					retdata.push({url:d[i].goods_id,price:d[i].goods[0].price,name:d[i].goods[0].name,src:d[i].goods[0].piclist[0],count:d[i].number});
				}
				req.retdata=retdata;
				return next();
			} 
		});

}
exports.mycart=function(req,res,next){
	if(!req.isAuthenticated()) res.redirect("/?onclick=mycart");
	
	res.render("mycart.html",{user:req.user,retdata:req.retdata});
	
};
//加载更多购物车数据
exports.loadMycart=function(req,res,next){
	if(!req.isAuthenticated()) res.end("nologin");
	//var query=req.query.limit;
	var query=req.body.limit;
	var username=req.user.username;
	
	try{
	Mycart.find({username:username},function(err,d){
			if(err){
				console.log('err=',err);
				res.end("error");
			}else{
				var retdata=[];
				for(var i in d){
					retdata.push({url:d[i].goods_id,price:d[i].goods[0].price,name:d[i].goods[0].name,src:d[i].goods[0].piclist[0],count:d[i].number});
				}
				console.log(retdata)
				res.json(retdata);
			} 
		}).limit(5).skip(query);
	}catch(e){
		console.log('e=',e)
		res.end("error");
	}
}
//添加到购物车
exports.addMycart=function(req,res,next){
	if(!req.isAuthenticated()) res.end("nologin");
	var username=req.user.username;
	var id=req.query.id;
	var count=req.query.count;
	console.log(id,",",count);
	Goods.find({id:id},function(err,data){
		if(err) res.end("error");
		Mycart.findOne({username:username,goods_id:id},function(err,d){
			if(err) res.end("error");
			if(d){
				d.number=Math.floor(count)+d.number;
				console.log('d.number',d.number)
				d.save(function(err){
					if(err) res.end("error");
					res.end('ok'); 
				});

			}else{
				var mycarts=new Mycart({username:username,number:count,goods_id:id,goods:data});
				mycarts.save(function(err){
					if(err) res.end("error");
					res.end('ok');
				});
			}
		});
	})
	
}
//从购物车中删除
exports.removeMycart=function(req,res,next){
	if(!req.isAuthenticated()) res.end("nologin");
	var id=req.query.id;
	Mycart.remove({username:req.user.username,goods_id:id},function(err,d){
		if(err) res.end("error");
		res.end("ok");
	});
}
//提交订单
exports.submitMycart=function(req,res,next){
	if(!req.isAuthenticated()) res.end("nologin");
		req.body.username=req.user.username;
		var data=req.body;
		Goods.find({id:{$in:data.idlist}},function(err,result){
			if(err) res.end('error');
			data['goodslist']=result;	
			var myorder= new  Myorder(data);
			myorder.save(function(err,d){
				if(err) res.end("err");
				console.log(d);
				res.end("ok");
			})	
		})
		
	
}

//分类页面响应
exports.kinds=function(req,res,next){
	if(!req.isAuthenticated()) res.render("kinds.html",{user:null});
	res.render("kinds.html",{user:req.user});
};
//获取分类页面数据
exports.getKinds=function(req,res,next){
	Goods.find(req.body,function(err,data){
		if(err) res.json([]);
		res.json(data);
	});
}

//收藏夹页面响应
exports.collection=function(req,res,next){
	if(!req.isAuthenticated()) res.redirect("/?onclick=collection");
	res.render("collection.html",{user:req.user});
};
//加载收藏夹数据
exports.loadCollection=function(req,res,next){
	if(!req.isAuthenticated()) res.end("nologin");
	var limit=req.body.limit;
	Collection.find({username:req.user.username},function(err,d){
		if(err) res.json([]);
		res.json(d);
	}).limit(10).skip(limit);
}
//删除收藏数据
exports.removeCollection=function(req,res,next){
	var id=req.query.id;
	Collection.findOne({username:req.user.username,goods_id:id},function(err,d){
		if(err) res.end("error");
		if(d){

			d.remove(function(err){
				if(err) res.end("error");
				res.end("ok");
			})
		}else{
			res.end("error");
		}
		

	})
}
//添加到收藏夹
exports.addCollection=function(req,res,next){
	if(!req.isAuthenticated()) res.end("nologin");
		var id=req.query.id;
		var username=req.user.username;
		Goods.find({id:id},function(err,data){
			if(err) res.end("error");
			Collection.findOne({username:username,goods_id:id},function(err,d){
				if(err) res.end("error");
				if(d){
					res.end("exist");
				}else{
					var collection=new Collection({username:username,goods_id:id,goods:data});
					collection.save(function(err){
						if(err) res.end("error");
						res.end('ok');
					});
				}
			});
		});
	
}

//订单页面响应
exports.myorder=function(req,res,next){
	if(!req.isAuthenticated()) res.redirect("/?onclick=myorder");

	res.render("myorder.html",{user:req.user});
};
//获取订单数据
exports.getMyorder=function(req,res,next){
	console.log('coming')
	var limit=req.body.limit;
	Myorder.find({username:req.user.username},function(err,d){
		if(err) res.json([]);
		
		res.json(d);
	}).limit(5).skip(limit);
}