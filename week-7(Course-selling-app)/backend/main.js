import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import {z} from 'zod';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { AdminModel, CourseModel, UserModel } from './db.js';
import { adminAuth, userAuth } from './middlewares/Middlewares.js';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_USER_SECRET = process.env.JWT_USER_SECRET;

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
        console.log('error creating new admin', e)
        res.status(500).json({ 
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
        console.log('error singing-In admin', e)
        res.status(500).json({ 
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
        res.status(500).json({ 
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
                return res.status(404).json({ 
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
    try{ 
        const courseId = req.params.courseId;

        const course = await CourseModel.findById(courseId);

        if(!course){ 
            return res.status(404).json({ 
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
        });
    }
    catch(e){ 
        console.log('error deleting-course', e);
        return res.status(500).json({ 
            Msg: 'error deleting course'
        });
    }
});

const userSignUpSchema = z.object({ 
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(5)
});

app.post("/users/signup", async(req, res) => { 
    try{ 
        const result = userSignUpSchema.safeParse(req.body);

        if(!result){ 
            return res.status(401).json({ 
            Msg: 'incorrect input or syntax error'
            })
        }

        const validData = result.data;

        const newUser = await UserModel.create(validData);

        res.status(200).json({ 
            Msg: 'new user created successfully',
            newUser
        });
    }
catch(e){ 
    console.log('error creating-new-user', e)
    return res.status(500).json({ 
        Msg: 'error creating new user'
    });
}
});

const userSigninSchema = z.object({ 
    email: z.string().email(),
    password: z.string().min(5)
})

app.post("/users/signin", async(req, res) => {
    try{ 
        const result = userSigninSchema.safeParse(req.body);

        if(!result){ 
            return res.status(400).json({ 
            Msg: 'incorrect input or syntax error'
            });
        }

        const validData = result.data;

        const existingUser = await UserModel.findOne({ 
            email: validData.email
        });

        if(!existingUser){ 
            return res.status(404).json({ 
            Msg: 'no such user found'
            });
        }

        const token = jwt.sign({ 
            _id: existingUser._id
        }, JWT_USER_SECRET);

        res.status(200).json({ 
            Msg: 'user logged in successfuly',
            token
        });
    }
    catch(e){ 
        console.log('user signing In error', e)
        return res.status(500).json({ 
            Msg: 'error logging in',
        });
    }
});

app.get("/users/courses", userAuth, async(req, res) => { 
    try{ 
        const allCourses = await CourseModel.find();

        res.status(201).json({ 
            Msg: 'all courses',
            allCourses
        });
    }
    catch(e){ 
        console.log('get-all-course-error', e)
        res.status(500).json({ 
            Msg: 'error finding all courses'
        })
    }
});

app.post("/users/courses/:courseId", userAuth, async (req, res) => { 
    try{ 
         const courseId = req.params.courseId;
         console.log(courseId)

        const course = await CourseModel.findOne({ 
            _id: courseId
        });

        if(!course){ 
            return res.status(404).json({ 
            Msg: 'selected course not found or deleted'
            })
        }

        const updatedUser = await UserModel.findOneAndUpdate(
            { _id: req.userId }, 
            { $addToSet: { purchasedCourses: course._id } },
            { new: true }
        );

        res.status(200).json({ 
            Msg: 'congratulation you purchased a new course',
            updatedUser
        });
    }
    catch(e){ 
        console.log('purchasing-course-error', e);
        return res.status(500).json({ 
            Msg: 'error purchasing course'
        });
    }
});

app.get("/users/purchasedcourses", userAuth, async(req, res) => {
    try{ 
        const userId = req.userId;
        console.log(userId);

        const user = await UserModel.findById(userId)
        .populate({ 
            path: "purchasedCourses",
            select: "title price"
        });

        if(!user){ 
            return res.status(404).json({ 
                Msg: 'user not found'
            })
        }

        res.status(200).json({ 
            Msg: "user's all courses",
            purchasedCourses: user.purchasedCourses
        });
    }
    catch(e){ 
        console.log('error-searching-courses-of-user', e);
        return res.status(500).json({ 
            Msg: 'error searching your courses'
        });
    }
});



app.listen(3000, console.log('app listening on port 3000'));
