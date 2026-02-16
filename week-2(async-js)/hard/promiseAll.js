let p1 = new Promise ((resolve) => { 
    setTimeout(() => { 
        resolve(99)
    }, 1000)
});

let p2 = new Promise ((resolve) => { 
   setTimeout(() => { 
        resolve(100)
    }, 2000)
});

let p3 = new Promise ((resolve) => { 
   setTimeout(() => { 
        resolve(1002)
    }, 1000)
});

let p4 = new Promise ((resolve) => { 
   setTimeout(() => { 
        resolve(1003)
    }, 3000)
});

let p5 = new Promise ((resolve) => { 
   setTimeout(() => { 
        resolve(1004)
    }, 4000)
});



Promise.all([p1, p2, p3, p4, p5])
.then((values) => { 
    console.log(values)
})
