
import express from "express"
import  {getAllUser , createUser , updateUser , deleteUser, getProfile} from "../controller/userController.js"
import auth from "../middleware/auth.js"
import { signupUser , loginUser  } from "../controller/userController.js"
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

router.get("/profile" , auth , getProfile)


export default router;