// Callback
const doWorkCallback = (callback) => {
    setTimeout(() => {
       // callback('This is my error', undefined)
       // Simulate async function with no error
       callback(undefined, [1, 4, 7])
    }, 2000);
}

doWorkCallback((error, result) => {
    if(error){
        return console.log(error)
    }

    console.log(result)
})

// Promise - 2 separate functions we call one for success, one for failure
// A promise is pending before either resolve or reject is executed
// If resolve is called then your promise is considered fulfilled
// If reject is called then your promise is considered rejected
// Usually this happens behind the scenes in the library itself
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // If things went well we call resolve
        resolve([1, 4, 7])

        // If things went bad we call reject
        // reject('This is my error!')
    }, 2000);
})

// .then allows us to register a function to run when things went well, when resolve is called
doWorkPromise.then((result) => {
    // Only gets executed when things went well
    console.log('Success!', result)
}).catch((error) => {
    // .catch only gets executed when things went bad, when reject is called
    console.log('Error!', error)
})
