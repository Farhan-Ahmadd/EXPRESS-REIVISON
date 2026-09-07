import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    // createdby:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"User"
    // }
})
const User = mongoose.model("User", UserSchema)
export default User;