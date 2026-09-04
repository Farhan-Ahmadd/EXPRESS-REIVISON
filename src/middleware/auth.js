// import jwt from "jsonwebtoken"
// const auth = (req , res , next)=>{
//     const authHeader = req.headers.authorization
//     if(!authHeader){
//         return res.status(401).json({
//             success:false,
//             message:"token required"
//         })
//     }
//     const token = authHeader.split(" ")[1]
//     try{
//         const decoded = jwt.verify(token , process.env.JWT_SECRET)
//         req.user=decoded
//         next()
//     }catch(err){
//         return res.status(400).json({
//             success:false,
//             message:"invalid token"
//         })
//     }
// }
// export default auth;
// import jwt from "jsonwebtoken"
// const auth = (req , res, next)=>{
//     const authHeader = req.headers.authorization
//     if(!authHeader){
//         return res.status(401).json({
//             success:false,
//             message:"token not avalible"
//         })
//     }
//     const token = authHeader.split(" ")[1]
//     try{
//         const decoded = jwt.verify(token , process.env.JWT_SECRET)
//         req.user=decoded
//         next()
//     }catch(err){
//         return res.status(401).json({
//             success:false,
//             message:"token invalid"
//         })
//     }
// }
// export default auth;
import jwt from "jsonwebtoken"
export const auth = (req , res , next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader){
        return res.status(500).json({
            success:false,
            message:"token not avalible"
        })
    }
    const token = authHeader.split(" ")[1]
    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        req.user=decoded
        next()
    }catch(err){
       return
         res.status(401).json({
            success:false,
            error:err.message
        })
    }
}