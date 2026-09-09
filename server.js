import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./src/routes/userRoutes.js";
import connectDB from "./src/config/db.js";

import logger from "./src/middleware/logger.js";
import check from "./src/middleware/check..js";
import { checkname, checkemail } from "./src/middleware/checkname.js";
import errorhandler from "./src/middleware/errorHandler.js";


dotenv.config();

const app = express();


// ====================
// Global Middleware
// ====================

app.use(express.json());

app.use(cors({
    // origin: "http://127.0.0.1:5500/test.html",
    origin: "http://127.0.0.1:5500",
}));


// ====================
// Database
// ====================

connectDB();


// ====================
// Custom Middleware
// ====================

// app.use(logger);
// app.use(check);
// app.use(checkname, checkemail);


// ====================
// Routes
// ====================

app.use("/user", userRoutes);


// ====================
// Home Route
// ====================

app.get("/", (req, res,next) => {
    res.json({"message": "server is running"});
}); 


// ====================
// 404 Error Handler
// ====================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "route not found"
    });
});


// ====================
// Global Error Handler
// ====================

app.use(errorhandler);


// ====================
// Start Server
// ====================

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});