import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import {z} from 'zod';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { AdminModel, CourseModel, UserModel } from './db.js';
import { adminAuth } from './middlewares/Middlewares.js';

const JWT_SECRET = process.env.JWT_SECRET;

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

app.put("/admin/course/:courseId", adminAuth, async(req, res) => { 
    try{ 
        const{ title, price } = req.body;
        const courseId = req.params.courseId;
        const course = await CourseModel.findById(courseId);

        if(!course){ 
         return res.status(304).json({ 
             Msg: 'course not found'
         });
        }
        if(course.adminId.toString() !== req.adminId){ 
            console.log(course.adminId.toString(), req.adminId)
            return res.status(401).json({ 
            Msg: 'you are not authorized to change this course'
        });
        }

        const updatedCourse = await CourseModel.findOneAndUpdate(
            { 
             _id: courseId,
             adminId: req.adminId
            },
            req.body,
            { new: true }
        );

        res.status(200).json({ 
        Msg: 'course updated successfully',
        updatedCourse
        });
    }
    catch(e){ 
        console.log('updating-course-err', e)
         res.status(500).json({ 
            Msg: 'error updating course'
         })
    }
});


app.delete("/admin/course/:courseId", adminAuth, async(req, res) => { 
    const courseId = req.params.courseId;

    const course = await CourseModel.findById(courseId);

    if(!course){ 
        return res.status(400).json({ 
            Msg: 'no such course found'
        })
    }
    console.log(course.adminId.toString(), req.adminId)

    if(course.adminId.toString() !== req.adminId){ 
        return res.status(401).json({ 
            Msg: 'you are not authorized to delete this course'
        })
    }

    const deletedCourse = await CourseModel.findByIdAndDelete( 
        { 
            _id: courseId,
            adminId: req.adminId
        }, 
    );

    res.status(200).json({ 
        Msg: 'course deleted successfully',
        deletedCourse
    })
});

const userSignUpSchema = z.object({ 
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(5)
});

app.post("/user/signup", (req, res) => { 
    try{ 
        const result = userSignUpSchema.safeParse(req.body);

    if(!result){ 
        return res.status(301).json({ 
            Msg: 'incorrect input or syntax error'
        })
    }

    const validData = result.data;

    const newUser = UserModel.create(validData);

    res.status(200).json({ 
        Msg: 'new user created successfully',
        newUser
    });
}
catch(e){ 
    return res.status(403).json({ 
        Msg: 'error creating new user'
    });
}
})





app.listen(3000, console.log('app listening on port 3000'));
