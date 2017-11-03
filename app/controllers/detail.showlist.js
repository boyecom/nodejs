// var Mycart=require("../models/mycartModel");
// var Myorder=require("../models/myorderModel");
//var Collection=require("../models/collectionModel");
var Goods=require("../models/goodsModel");
exports.getgoodsid=function(req,res,next,goodsid){
	//console.log('goodsid=',goodsid)
	Goods.find({id:goodsid},function(err,d){
		if(err){
			req.retdate=[];
			return next();
		}
		req.retdate=d;
		return next();
	})
}

exports.detail=function(req,res,next){ 
	


	if(!req.isAuthenticated()) res.render("detail.html",{user:null,d:req.retdate});
	res.render("detail.html",{user:req.user,d:req.retdate});

	
	
}
exports.showlist=function(req,res,next){
	 if(!req.isAuthenticated()) res.render("showlist.html",{user:null});
	res.render("showlist.html",{user:req.user});

}

exports.getShowlist=function(req,res,next){
	var searchtype=req.body.searchtype;
	var value=req.body.value;
	console.log(searchtype)
	console.log(value)
	if(searchtype=="search"){
		//var value=req.body.value;
		Goods.find({name:{$regex:value}},function(err,d){
			if(err) res.json([]);
			res.json(d);
		}).sort({name:1})
	}else if(searchtype=="kinds"){
		//var value=req.body.value;
		if(value=="wc"){//女装
			Goods.find({typename:"wemanclose"},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:1});
		}else if(value=="wdiscount"){//女打折
			Goods.find({discount:{$lt:1},$or:[{typename:"wemanshoes"},{typename:"wemanclose"}]},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:1});
		}else if(value=="price"){//价格筛选
			Goods.find({price:{$gt:200}},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:1});
		}else if(value=="mcs"){//男装、男鞋
			Goods.find({$or:[{typename:"manclose"},{typename:"manshoes"}]},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:-1});
		}
	}else if(searchtype=="counters"){
		if(value=="msws"){//男鞋、女鞋
			Goods.find({$or:[{typename:"wemanshoes"},{typename:"manshoes"}]},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:-1});
		}else if(value=="mcwc"){//男装、女装
			Goods.find({$or:[{typename:"wemanclose"},{typename:"manclose"}]},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:1});
		}else if(value=="ms"){//男鞋专柜
			Goods.find({typename:"manshoes"},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:1});
		}else if(value=="ws"){//女鞋专柜
			Goods.find({typename:"wemanshoes"},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:-1});
		}else if(value=="mc"){//男装专柜
			Goods.find({typename:"manclose"},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:1});
		}else if(value=="wc"){//女装专柜
			Goods.find({typename:"wemanclose"},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:1});
		}

	}else if(searchtype=="youhui"){
		if(value=="food"){//好吃
			Goods.find({typename:"food",discount:{$lt:1}},function(err,d){
			if(err) res.json([]);
			res.json(d);
			});
		}else if(value=="mc"){//男装
			Goods.find({typename:"manclose",discount:{$lt:1}},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:-1});
		}else if(value=="ms"){//男鞋
			Goods.find({typename:"manshoes",discount:{$lt:1}},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:1});
		}else if(value=="ws"){//女鞋专柜
			Goods.find({typename:"wemanshoes",discount:{$lt:1}},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:-1});
		}else if(value=="wc"){//女装专柜
			Goods.find({typename:"wemanclose",discount:{$lt:1}},function(err,d){
			if(err) res.json([]);
			res.json(d);
			}).sort({name:-1});
		}

	}
}

