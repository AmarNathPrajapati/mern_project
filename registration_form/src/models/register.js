const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    //like sql query to create rows in table with different conditions
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    },
    gender:{
        type:Number,
        required:true,
    },
    message:{
        type:String,
        required:true
    }
})
//like excuting query in sql to create a table/collection collectino name should be start with capital letter.
const userTable = new mongoose.model("UserTable",userSchema);
module.exports = userTable;