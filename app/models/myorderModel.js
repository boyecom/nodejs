var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var myorderSchema = new Schema({
	username:String,
    name:String,//收货人
    momey:Number,//总价
    other:String,
    address:String,
    phone:String,
    goodslist:Array,
    create_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Myorder',myorderSchema);