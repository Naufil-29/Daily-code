// async function promisifySetTimeout () { 
//     let p = await new Promise( (resolve) => { 
//          setTimeout(() => { 
//             resolve(99)
//             console.log('completed')
//         },1000);
//     })
//     console.log(p) //return
//     console.log('next task started')


// }

// promisifySetTimeout()


// correct pattern

function promisifySetTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// usage
async function run() {
  console.log("waiting...");
  await promisifySetTimeout(1000);
  console.log("done");
}

run();