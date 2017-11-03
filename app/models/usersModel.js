var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt-nodejs');
var userSchema = new Schema({
    username:String,
    password:String,
    email:String,
    phone:String,
    address:String,
    addrList:Array,
    age:String,
    firstname:String,
    create_date: { type: Date, default: Date.now }
});
/*userSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
};


userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password,this.password);
};*/
//var User= mongoose.model('User',userSchema);
module.exports = mongoose.model('User',userSchema);