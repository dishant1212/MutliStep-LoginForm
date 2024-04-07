const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
      
    },
    password:{
        type:String,
        require:true
    },
    imgUrl:{
        type:String,
        
    },
    location:{
        type:String
    },
    selectOption:{
        type:String
    }

})

const User=mongoose.model("user",UserSchema)

module.exports=User
