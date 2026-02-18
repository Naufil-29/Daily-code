import express from "express";
import cors from "cors"
const PORT = 3000;

const app = express();
app.use(cors())
app.use(express.json());

let todos = []

app.post("/newtodo", (req, res) => { 
    const { title, content } = req.body;

    let newTodo = { title, content };
    
    todos.push(newTodo)
    console.log(todos)

    res.status(200).json({
        todos,
        Msg: "todo creted successfully"
    });
});

app.get("/alltodos", (req, res) => { 
    res.status(200).json({ 
        todos
    });
});

app.delete("/delete/:id", (req, res) => { 
    let index = parseInt(req.params.id);
    console.log(index);

    let newTodos = [...todos]

    newTodos.splice(index , 1);

    res.status(200).json({ 
        Msg: "todo deleted successfully",
        newTodos
    });
});

app.listen(`${PORT}`,console.log(`app listening on port ${PORT}`))