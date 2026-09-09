
import express from "express"
import  {getAllUser , createUser , updateUser , deleteUser, getAllProfiles} from "../controller/userController.js"
import auth from "../middleware/auth.js"
import { signupUser , loginUser  } from "../controller/userController.js"
import upload from "../middleware/upload.js"
const router = express.Router()

//-----get all users-------///

router.get("/", getAllUser)

//---protected routes---//
router.post("/" , auth , createUser);
router.put("/:id" , auth , updateUser);
router.delete("/:id" , auth , deleteUser);
///----authentication---///
router.post("/signup" ,  signupUser)
router.post("/login" , loginUser)
///------protected profile---------//

router.get("/profiles" , getAllProfiles)
// router.post("/upload", upload.single("image"), (req,res)=>{
//     res.status(200).json({
//         success:true, 
//         message:"iamge successfully upload",
//         file:req.file,
//     })
// })

router.post("/upload" , upload.array("iamge", 5), (req , res)=>{
  res.status(200).json({
    success:true,
    Message:"iamge upload successfully upload",
    file:req.fileshan,
  })
})
export default router;