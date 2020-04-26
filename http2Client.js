const fs = require('fs')
const http2 = require('http2')
const ca = fs.readFileSync('localhost-cert.pem')
const client = http2.connect('https://localhost:8443', {
    ca
})
const req = client.request({":path" : "/"})

req.on("error", console.error)

req.on("response", (headers) => {
    for (const name in headers) {
        console.log(`${name} : ${headers[name]}`)
    }
})

req.setEncoding('utf8')
req.on('data', (data) => {
    console.log("Got data", data.toString())
})

req.on('end', () => {
    console.log("ended");
    client.close()
})

req.end()
