import  User from "../models/userModel.js"
import jwt from "jsonwebtoken"
export const  getAllUser = async (req , res)=>{
try{
    const getUser = await User.find()
    res.status(200).json({
        success:true,
        data:getUser
    })
}catch(err){
    res.status(500).json({ success:false, error:err.message

    })
 }
}

export  const createUser = async (req , res)=>{
    try{
        const { name , email , age }= req.body;
        const newUser = new User({name , email , age})
        await newUser.save()
        res.status(201).json({
            success:true, message:"user create", data:newUser
        })
    }catch(err){
        res.status(500).json({
            success:false , error:err.message
        })
    }
}

//----- update---//
export const updateUser = async (req , res)=>{
    try{
        const { id } = req.params;
        const {name , email , age} = req.body;
        const updateUser = await User.findByIdAndUpdate(id , {name , email , age},{ new: true})
        if(!updateUser){
            return res.status(404).json({
                success:false, message:"user not found"
            })
        }
        res.status(200).json({
            success:true, message:"user successfully updated", data:updateUser
        })
    }catch(err){
        res.status(500).json({
            success:false , error:err.message
        })
    }
}
///----delete----///
export const  deleteUser = async (req , res)=>{
    try{
        const {id} = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
        if(!deleteUser){
            return res.status(500).json({
                success:false, message:"user not found"
            })
        }
        res.status(200).json({
            success:true , message:"user successfully deleted" ,data:deleteUser
        })

    }catch(err){
        res.status(500).json({
            success:false, error:err.message
        })
    }
}
//-------signup page----////
// export const signupUser = async (req , res)=>{
//     try{
//         const {name , email , age}= req.body;
//         const existingUser = await User.findOne({email});
//         if(existingUser){
//             return res.status(400).json({
//                 success:false, 
//                 message:"user already existing"
//             })
//         }
//         const newUser = new User({ name , email , age});
//         await newUser.save()
//         const token = jwt.sign({id: newUser._id} , process.env.JWT_SECRET ,{expiresIn:"1d"})
//         res.status(201).json({
//             success:true ,
//             message:"signup user", token
//         })
//     }catch(err){
//         res.status(500).json({
//             success:false,
//             error:err.message
//         })
//     }
// }
export const signupUser = async (req, res)=>{
    try{
        const { name , email , age} = req.body;
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(500).json({
               success:false,
               message:"user already existing"
            })
        }
        const newUser = new User({name , email , age})
        await newUser.save()
        const token = jwt.sign({id: newUser._id} , process.env.JWT_SECRET ,{ expiresIn:"1d"})
        res.status(201).json({
            success:true,
            message:"signup user" , token 
        })
    }catch(err){
        res.status(500).json({
            success:false, error:err.message
        })
    }
}
///----------login---------///
export const loginUser = async (req , res)=>{
    try{
        const {email} = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"user not found"
            })
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn:"1d"})
        res.status(200).json({
            success:true,
            message:"user successfully login",token,data:user
        })

    }catch(err){
        res.status(500).json({
            success:false,
            error:err.message
        })
    }
}
///------------getprofile------------///
export  const getProfile = async (req , res)=>{
    try{
        const user = await User.findById(req.user.id)
        if(!user){
            return res.status(500).json(
                { success:false , message:"user not found"}
            )
        }
        res.status(200).json({
            success:true, message:"profile accessed", data:user
        })
    }catch(err){
        res.status(400).json({
            success:false, error:err.message
        })
    }
} 