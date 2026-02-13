const userRequests = new Map();

// export function rateLimiter(req, res, next) {
//   const username = req.body.username;
//   console.log(username) // assume auth middleware already set this
//   const now = Date.now();

//   if (!userRequests.has(username)) {
//     userRequests.set(username, []);
//   }

//   const timestamps = userRequests.get(username);

//   // keep only last 1 second requests
//   const recentRequests = timestamps.filter(
//     (time) => now - time < 5000
//   );

//   if (recentRequests.length >= 2) {
//     return res.status(429).json({
//       message: "Too many requests. Try again later."
//     });
//   }

//   recentRequests.push(now);
//   userRequests.set(username, recentRequests);

//   next();
// }

export function rateLimiter (req, res, next){ 
    const username = req.body.username;
    const now = Date.now();
    console.log(username)

    if(!userRequests.has(username)){ 
        userRequests.set(username, [])
    }

    const timestamps = userRequests.get(username)

    const recentRequests = timestamps.filter((time) => { 
        now - time < 1000
    })

    if(recentRequests.lenght >= 5){ 
        return res.status(429).json({Msg: "Too many requests"})
    }

    recentRequests.push(now)
    userRequests.set(username, recentRequests)

    next()

}