const express=require("express")
const router=express.Router()

const {UserCreateHandler,updateImageAndLoactionHandelr,signInHandler}=require("../controller/controller")


router.route("/signUp")
.post(UserCreateHandler)

router.route("/signUp/:id")
.put(updateImageAndLoactionHandelr)

router.route("/signIn")
.post(signInHandler)

module.exports=router