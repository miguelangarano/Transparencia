const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//Create Schema
const UserSchema=new Schema({
    correo:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    fechaNac:{
        type:Date,
        required:true
    },
    ocupacion:{
        type:String,
        required:true
    },
    pais:{
        type:String,
        required:true
    },
    ciudad:{
        type:String,
        required:true
    },
});

module.exports=Item=mongoose.model('user',UserSchema);