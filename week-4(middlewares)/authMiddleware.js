import dotenv from "dotenv"
dotenv.config()



export function authMiddlware (req, res, next) { 
   const userSecret = req.body.userSecret;
   console.log(userSecret)
   
    const secretKey = process.env.SECRET_KEY;
    console.log(secretKey)

    if(userSecret === secretKey){ 
        next()
    }
    else{ 
        res.status(401).json({Msg: "user UnAuthorized"})
    }
}