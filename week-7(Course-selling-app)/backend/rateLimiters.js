import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({ 
    windowMs: 15 * 60 * 1000, //15 mins.
    max: 100,  // limit for each IP
    message: { 
        Msg: "Too many requests, please try again later"
    },
    standardHeaders: true,
    legacyHeaders: false
});

 export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // Only 5 login attempts
  message: {
    Msg: "Too many login attempts. Try again after 15 minutes."
  }
});