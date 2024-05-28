const mongoose= require('mongoose');

const UserSchema = new mongoose.Schema({
    //schema for structure and organisation of data in database
    username: {type:String , unique:true},
    password: String,
},{timestamps: true});
// timestamps for having a track on create and updates

const UserModel= mongoose.model('User',UserSchema);
module.exports =UserModel;