const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")
const app=express()
const UserRouter=require("./route/route")


mongoose.connect("mongodb://localhost:27017/multiStepLoginFormData")
.then(()=>{
    console.log("mongoose connected")
})
.catch((error)=>{
    console.log(error)
})
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cors())
app.use("/",UserRouter)




app.listen(4000,()=>{
     console.log("4000 port connected successfully")
})