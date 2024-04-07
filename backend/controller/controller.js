const User=require("../modal/user")

async function UserCreateHandler(req,res){
    const {name,username,email,password,location,imgUrl,selectOption}=req.body

             const user=await User.findOne({username})
             
          if(user){
               res.status(200).send({msg:"User has already been taken",checkUser:user})
            }else{
                 const  addUser=await User.create({name,username,email,password,location,imgUrl,selectOption})
                return res.status(201).send({msg:"user added",Id:addUser._id,user:addUser})
            }
}

async function updateImageAndLoactionHandelr(req,res){
     const {image,location,selectedBox}=req.body
     const {id}=req.params
    const updateUser= await User.findByIdAndUpdate(id,{imgUrl:image,location:location,
        selectOption:selectedBox})
     res.status(200).json({msg:"user updated",user:updateUser})
     
}

async function signInHandler(req,res){
      const {username,password}=req.body
      
      const userExist=await User.findOne({username})

      
      if(!userExist){
        return res.status(404).json({msg:"Invalid Credentials"});

      }else{
         if(userExist.password===password){
             return res.status(200).json({msg:"SignIn Successful",user:userExist})
         }else{
            res.status(404).json({msg:"Invalid Password"})
         }
      }

      
     

}

module.exports={
    UserCreateHandler,
    updateImageAndLoactionHandelr,
    signInHandler
}