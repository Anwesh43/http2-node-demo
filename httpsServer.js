const fs = require('fs')

const key = fs.readFileSync('localhost-privkey.pem')
const cert = fs.readFileSync('localhost-cert.pem')

const https = require('https')

const server = https.createServer({key, cert}, (req, res) => {
    const contentType = 'text/html'
    const status = '200'
    res.writeHead(200)
    res.write("Hello World")
    res.end()
})
console.log("listening on 8443")
server.listen(8443);
