import mongoose from "mongoose";
const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/reivisonDB")
    }catch(error){
     console.log("DB Error" , error)
    }
}
export default connectDB;