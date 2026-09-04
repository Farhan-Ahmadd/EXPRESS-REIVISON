import express from "express";
import dotenv from "dotenv"
import  userRoutes from "./src/routes/userRoutes.js"
import  connectDB  from "./src/config/db.js";
import logger from "./src/middleware/logger.js";
import check from "./src/middleware/check..js";
import {checkname , checkemail} from "./src/middleware/checkname.js";
const app = express();
app.use(express.json())
connectDB();
dotenv.config()
// user routes
app.use("/user", userRoutes)
app.use(logger);
app.use(check);
app.use(checkname , checkemail);

// start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});