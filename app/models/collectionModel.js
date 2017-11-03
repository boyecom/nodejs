var mongoose = require('mongoose');
var Goods=require("./goodsModel");
var Schema = mongoose.Schema;
var collectionSchema = new Schema({
    username:String,//用户名
    goods_id:String,//产品编号
    goods:Array,
    create_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Collection',collectionSchema);