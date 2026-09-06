// import multer from "multer"
// const storage = multer.diskStorage({
//     destination:(req , file , cb) =>{
//         cb(null , "uploads/")
//     },
//     filename:(req , file, cb)=>{
//         cb(null , Date.now()+"-"+ file.orignalname)
//     }
// })
// const upload    = multer({
//     storage:storage
// })
// export default upload;
import multer from "multer";
const storage = multer.diskStorage({
    destination:(req ,file , cb)=>{
        cb(null ,"uploads/")
    },
    filename:(req , file , cb)=>{
        cb(null , Date.now()+"-"+ file.orignalname)
    }
})
const upload = multer({storage:storage})
export default upload;