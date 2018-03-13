const http = require('http')
const url = require('url')

function parseTime(time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unixTime(time) {
	return {unixtime: time.getTime()}
}

const server = http.createServer((req,res) => {
	let parsedUrl = url.parse(req.url,true)
	
	
	let time = new Date(parsedUrl.query.iso)
	let result;

	if (/^\/api\/parsetime/.test(req.url)) {
		result = parseTime(time)
	} else if (/^\/api\/unixtime/.test(req.url)) {
		result = unixTime(time)
	}

	if (result) {
		res.writeHead(200, {'Content-Type':"application/json"})
		res.end(JSON.stringify(result))
	} else {
		res.writeHead(404)
		res.end()
	}

	

})

server.listen(Number(process.argv[2]))