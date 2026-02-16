function clock () { 
let time = new Date(Date.now());
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
const currentTime = `${hours} : ${minutes} : ${seconds}`
console.log(currentTime)
}

setInterval(clock, 1000)