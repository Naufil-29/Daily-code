import express from "express";
import { rateLimiter } from "./rateLimiter.js";
const app = express();
const port = 3000;

let reqCount = 0;

app.use(express.json())
// Global reqCount middleware
// app.use((req, res, next) => { 
//     const username = req.body.username;
//     reqCount++;

//     console.log(username, reqCount);
//     next()
// });


app.get("/", (req, res) => { 
    res.send("hey from express server")
});

app.post("/signup", (req, res) => { 
    res.send("Hello from signup page")
})

app.listen(port, console.log("apps listen on 3000"))
