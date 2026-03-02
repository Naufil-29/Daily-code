import express from "express";
import { userAuth } from "../Middlewares/Middlewares.js";
import { getAllCourses, purchasedCourses, userPurchase, userSignin, userSignup } from "../controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.post("/signup", userSignup);
userRoutes.post("/signin", userSignin);
userRoutes.get("/courses", userAuth, getAllCourses);
userRoutes.post("/course/:courseId", userAuth, userPurchase);
userRoutes.get("/purchasedcourses", userAuth, purchasedCourses);

export default userRoutes;