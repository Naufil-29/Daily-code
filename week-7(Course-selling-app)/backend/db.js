import mongoose from 'mongoose';
const { Schema } = mongoose

import { z } from 'zod'
// import dotenv from 'dotenv';
// dotenv.config()

// mongoose.connect(process.env.MONGO_URI)
// .then(() => { 
//     console.log('successfully connected to database')
// });

export const adminSchema = new mongoose.Schema({ 
    _id: { type: Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    courses: []
});

const userSchema = new mongoose.Schema({ 
    _id: { type: Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId },
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    purchasedCourses: []
});

const courseSchema = new mongoose.Schema({ 
    _id: { type: Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId },
    adminId: { type: Schema.Types.ObjectId, ref: 'Admin', required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true }
});

export const AdminModel = mongoose.model("Admin", adminSchema);
export const UserModel = mongoose.model("User", userSchema);
export const CourseModel = mongoose.model("Course", courseSchema);