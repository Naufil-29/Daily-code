let promise1 = new Promise((resolve) => { 
    setTimeout(() => { 
        console.log('completed promise-1')
        resolve(1)
    }, 1000)
})
.then(() => {
    return new Promise((resolve) => { 
    setTimeout(() => { 
        console.log('completed promise-2')
        resolve(2)
    }, 2000)
})
})

.then(() => { 
    return new Promise((resolve) => { 
    setTimeout(() => { 
        console.log('completed promise-3')
        resolve(3)
    }, 3000)
})
    })
.then(() => { 
    return new Promise((resolve) => { 
    setTimeout(() => { 
        console.log('completed promise-4')
        resolve(4)
    }, 4000)
    
})
})