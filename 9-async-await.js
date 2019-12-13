const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0){
                return reject('Numbers must be non negative')
            }

            resolve(a + b)
        }, 2000)
    })
}

// 1. Mark the function as an async function with the async keyword right before the function declaration; 
// async functions always return a promise; 
// that promise is fulfilled with the value you choose to return from the function

const doWork = async () => {
    // 3 async calls; You have access to all individual results in the exact same scope allowing a lot of flexibility
    // await is used with a promise; removes the need for all the callback functions
    // create a variable to get access to the value that the promise is fulfilled with; "the sum in this case"
    const sum = await add(1, 99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, 3)
    return sum3
}

// result is the value returned from doWork
doWork().then((result) => {
    console.log('result ', result)
}).catch((e) => {
    console.log('e ', e)
})