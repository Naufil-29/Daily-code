function sleep (ms) { 
    return new Promise((resolve) => { 
        setTimeout(resolve, ms)
    })
}

async function main () { 
    console.log('start...')
    await sleep(2000)
    console.log('task-1-start...')
    await sleep(2000)
    console.log('task-1-end...')
    await sleep(2000)
    console.log('task-2-start...')
    await sleep(2000)
    console.log('task-2-end after time out...')
}

 main()