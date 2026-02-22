import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import {z} from 'zod';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { AdminModel, CourseModel } from './db.js';
import { adminAuth } from './middlewares/Middlewares.js';

const JWT_SECRET = process.env.JWT_SECRET;
console.log(JWT_SECRET)

mongoose.connect('mongodb+srv://shaikhnaufil2908_db:Burg3167Man@paytm-db.kd1comr.mongodb.net/course-db')
.then(() => { 
    console.log('successfully connected to database')
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => { 
    res.send('express')
});

const adminSignupSchema = z.object({ 
    username: z.string().min(3).max(50),
    email: z.string().email(),
    password: z.string().min(5)
})

app.post("/admin/signup", async(req, res) => { 
    try{ 
            const { username, email, password } = req.body;

    const result = adminSignupSchema.safeParse(req.body);

    if(!result.success){ 
        return res.status(400).json({ 
            Msg: 'Bad input or incorrect syntax'
        });
    }

    const ValidData = result.data;

    const newAdmin = await AdminModel.create(ValidData);

    res.status(200).json({ 
        Msg: 'New admin created successfully',
        newAdmin
    });
    
    }
    catch(e){ 
        res.status(300).json({ 
            Msg: 'error creating new adim'
        })
    }
});

const adminSigninSchema = z.object({ 
    email: z.string().email(),
    password: z.string().min(3)
});

app.post("/admin/signin", async(req, res) => { 
    try{ 
        const { email, password } = req.body;
    const result = adminSigninSchema.safeParse(req.body);

    if(!result.success){ 
        return res.status(400).json({ 
            Msg: "bad input or incorrect syntax"
        });
    }

    const ValidData = result.data

    const existingAdmin = await AdminModel.findOne({ 
        email: ValidData.email
    });

    if(!existingAdmin){ 
        res.status(401).json({ 
            Msg: "Unauthorized! admin not found"
        })
    }

    const token = jwt.sign({ 
        id: existingAdmin._id
    }, JWT_SECRET)

    res.status(200).json({ 
        Msg: 'admin signed-in successfully',
        token
    });
    }
    catch(e){ 
        res.status(400).json({ 
            Msg: 'error signing-in as admin'
        })
    }
});

const courseZodSchema = z.object({ 
    title: z.string().min(3).max(50),
    price: z.coerce.number()
})

app.post("/admin/course", adminAuth, async(req, res) => {
    try{ 
        console.log(req.adminId)
        const result = courseZodSchema.safeParse(req.body);

    if(!result.success){ 
        return res.status(400).json({ 
            Msg: "bad input or incorrect syntax"
        });
    };

    const ValidData = result.data;

    const newCourse = await CourseModel.create({ 
        adminId: req.adminId,
        title: ValidData.title,
        price: ValidData.price
    });

    res.status(201).json({ 
        Msg: 'course created successfully',
        newCourse
    });
    }
    catch(e){ 
        console.log('course-error', e)
        res.status(400).json({ 
            Msg: 'error creating new course'
        })
    }
});

app.put("/admin/course", adminAuth, (req, res) => { 
    
})





app.listen(3000, console.log('app listening on port 3000'));
