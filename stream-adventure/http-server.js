var http = require('http')
var fs = require('fs')
var through = require('through2')

var server = http.createServer((req,res) => {
	if(req.method === "POST") {
		req.pipe(through(function(buf,_,next){
			this.push(buf.toString().toUpperCase());
			next() // 交给下一步处理
		})).pipe(res)
	} else {
		res.end('send me a POST\n');
	}
})

server.listen(Number(process.argv[2]))