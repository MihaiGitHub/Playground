// Make requests using the modules Node provides; Node core modules
// Instead of installing request (npm module)

const https = require('https')
const url = 'xxxx'

const request = https.request(url, (response) => {
    // Use let instead of cons since the value will be reasigned over time
    let data = ''

    // response.on() allows to register a handler
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    // When things are over this callback function will run
    response.on('end', () => {
        const body = JSON.parse(data)
    })
})

request.on('error', (error) => {
    console.log('An error ', error)
})

request.end()
