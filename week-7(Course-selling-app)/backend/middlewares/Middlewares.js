import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

export function adminAuth(req, res, next) { 
    try{ 
        const token = req.headers.authorization;

    if(!token){ 
        return res.status(400).json({ 
            Msg: 'token not found or invalid'
        });
    };

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded){ 
        return res.status(400).json({ 
            Msg: 'token is incorrect/invalid'
        });
    
    };
    req.adminId = decoded.id;
    next();
    }
    catch(e){ 
        console.log('auth-error', e)
        res.status(500).json({ 
            Msg: 'failed to verify admin'
        })
    }
}


export function userAuth(req, res, next){ 
    try{ 
        const token = req.headers.authorization;

    if(!token){ 
        return res.status(401).json({ 
            Msg: 'token not found or invalid'
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_USER_SECRET);

    if(!decoded){ 
        return res.status(401).json({ 
            Msg: 'token is incorrect/invalid'
        })
    }

    req.userid = decoded._id;
    next();
    }
    catch(e){ 
        console.log('error verifying user', e)
        return res.status(500).json({ 
            Msg: 'failed to veirfy user'
        })
    }
}