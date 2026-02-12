

const counter = () => { 
    let time = 0
 setInterval(() => { 
    time += 1;
    console.log(time)
 }, 1000)
}

const counter2 = () => {
    let time = 0;

function timer1 () { 
        time += 1
        console.log(time)
        setTimeout(timer1, 1000)
    }
    setTimeout(timer1, 1000)
}

counter2()
