const http = require('http')
const config = require('./config')

http.createServer( (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  })

  res.end('Welcome To Focus163, it is building now!')
}).listen(config.port)

console.log(`Server running at http://127.0.0.1:/${config.port}`);