var mongoose = require('mongoose');
var Goods=require("./goodsModel");
var Schema = mongoose.Schema;
var mycartSchema = new Schema({
    username:String,//用户名
    number:{
    	type:Number,
    	default:1
    },//数量
    goods_id:String,//产品编号
    /*goods:{
    	type:mongoose.Schema.ObjectId,
    	ref:'Goods'
    }*/
    goods:Array
});

module.exports = mongoose.model('Mycart',mycartSchema);