const through = require('through2')

const stream = through(write,end);

function write(buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase())
	next();
}

function end(done) {
	done() //this.push(null)
}

process.stdin.pipe(stream).pipe(process.stdout)