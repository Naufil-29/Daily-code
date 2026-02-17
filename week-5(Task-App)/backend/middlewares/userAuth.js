import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_PASSWORD = "ASUS-2908";

export function userAuth(req, res, next){ 
    const token = req.headers.authorization;

    if(!token){ 
        return res.status(403).json({ Msg: "no token provided"})
    }

    const decoded = jwt.verify(token, SECRET_PASSWORD);

    try{ 
        req.userId = decoded._id;
        console.log(req.userId)
        next();
    }
    catch(e){ 
        return res.status(403).json({ 
            Msg: "invalid crediantials"
        });
    }
}