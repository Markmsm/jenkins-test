import http from 'node:http'

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ data: 'Hello World!', }))
})

server.listen(8000)

console.log('Server is listening.')