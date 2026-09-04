const checkname = (req , res , next)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({
            success:false,
            message:"Name is reqiuerd"
        })
    }
    next()
}
const checkemail = (req , res , next)=>{
    const {email} = req.body;
    if(!email){
        res.status(400).json({
            message:"Email is required",
            success:false,
        })
    }
    next()
}
export {checkname , checkemail};