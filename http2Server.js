const fs = require('fs')
const http2 = require('http2')
const key = fs.readFileSync('localhost-privkey.pem')
const cert = fs.readFileSync('localhost-cert.pem')
const server = http2.createSecureServer({
    key,
    cert
})

server.on('error', console.error)

server.on('stream', (stream) => {
    stream.respond({'content-type' : 'text/html', ':status' : 200})
    stream.write('<h1>Hello World</h1>')
    stream.write('<div>Part1</div>')
    stream.end()

})

server.listen(8443)
