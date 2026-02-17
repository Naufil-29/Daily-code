import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import cors from "cors";
import { userAuth } from "./middlewares/userAuth.js";
import { UserModel, TodoModel } from "./models/model.js"
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT
const SECRET_PASSWORD = process.env.SECRET_PASSWORD

app.get("/", (req, res) => { 
    res.send("hello Naufil")
});

app.post("/signup", async (req, res) => { 
    const { username, email, password } = req.body;

    const newUser = await UserModel.create({ 
        username,
        email,
        password
    });

    res.status(201).json({ 
        newUser,
        Msg: "user created successfully"
    })
});

app.post("/signin", async (req, res) => { 
    const { email, password } = req.body;

    const existingUser = await UserModel.findOne({ 
        email,
        password
    });

    if(existingUser){ 
       const token = await jwt.sign({ 
            _id: existingUser._id
        }, SECRET_PASSWORD);

        res.status(201).json({ 
            token,
            Msg: "user logged-in successfully"
        });
    }
    else{ 
        res.status(401).json({ 
            Msg: "Unauthorized user not found"
        });
    }
});

app.post("/newtodo", userAuth, async(req, res) => { 
    const { title, content } = req.body;
    

    const newTodo = await TodoModel.create({ 
        title,
        content,
        userId: req.userId
    });

    res.status(201).json({ 
        newTodo,
        Msg: "todo created successfully"
    })
});

app.get("/alltodos", userAuth, async (req, res) => { 
    try{ 
        const userTodos = await TodoModel.find({ 
        userId: req.userId
    });

    res.status(200).json({ 
        userTodos
    });
    }
    catch(e){ 
    res.status(500).json({
        sg: "Error fetching todos"
    });
    }
});

app.get("/todo/:id", userAuth, async (req, res) => { 
    try{ 
        const todoId = req.params.id;
        const todo = await TodoModel.findOne({ 
            _id: todoId,
            userId: req.userId
        });

        if(!todo){ 
            return res.status(401).json({ 
                Msg: "todo not found or not authorized"
            })
        }

        res.status(200).json({ 
            todo,
            Msg: "todo found"
        })
    }
    catch(e){ 
        res.status(500).json({ 
            Msg: "Error founding todo"
        })
    }
})

app.delete("/removetodo/:id", userAuth, async(req, res) => { 
    try{
        const todoId = req.params.id;

        const deletedTodo = await TodoModel.findOneAndDelete({ 
            _id: todoId,
            userId: req.userId
        });

        if(!deletedTodo){ 
            return res.status(401).json({ 
                Msg: "todo not found or not authorized"
            })
        }

        res.status(200).json({
            Msg: "Todo deleted successfully",
            deletedTodo
        });

    }
    catch(e){ 
         res.status(500).json({
            Msg: "Error deleting todo"
        });
    }
});

app.listen(PORT, console.log(`app is listening on ${PORT}`));





