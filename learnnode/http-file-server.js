const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res) => {
	res.writeHead(200, {'content-type':'text/plain'})
	const stream = fs.createReadStream(process.argv[3], 'utf-8');
	stream.pipe(res)
})

server.listen(Number(process.argv[2]));