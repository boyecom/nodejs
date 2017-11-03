var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var goodsSchema = new Schema({
    id:{
        type:String,
        unique:true
    },
    typename:String,
    name:String,
    piclist:Array,
    describe:String,
    price:Number,
    discount:{
        type:Number,
        default:1,
    },
    number:{
        type:Number,
        default:999
    }, //库存
    comment:Array,//评论[好评,中评,差评]
    //create_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Goods',goodsSchema);