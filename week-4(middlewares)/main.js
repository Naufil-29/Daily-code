import express from "express";
import { rateLimiter } from "./rateLimiter";
import { authMiddlware } from "./authMiddleware";
const app = express();
const port = 3000;
let reqCount = 0;
app.use(express.json());
app.use(rateLimiter);
app.use(authMiddlware);
// Global Incoming request logger 
app.use((req, res, next) => { 
    console.log("Req.Type : ", req.method)
    console.log("Req.URL : ", req.url)
    console.log("Req.headers : ", req.headers)
    console.log("Req.Body : ", req.body)
    next()
});

// Global reqCount middleware
app.use((req, res, next) => { 
    const username = req.body.username;
    reqCount++;

    console.log(username, reqCount);
    next()
});


app.get("/", (req, res) => { 
    res.send("hey from express server")
});

app.post("/signup", (req, res) => { 
    res.send("HEllo from signup page")
});


app.listen(port, console.log("apps listen on 3000"));
