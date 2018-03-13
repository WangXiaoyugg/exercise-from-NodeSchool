const net = require('net')

const server = net.createServer((socket) => {
	let date = new Date()
	let year = date.getFullYear();
	let month = date.getMonth() + 1 < 10 ? '0' +(date.getMonth() + 1): date.getMonth()+1
	let day = date.getDate() < 10 ? '0' + date.getDate(): date.getDate()
	let hour = date.getHours() < 10 ? '0'+ date.getHours(): date.getHours()
	let min = date.getMinutes() < 10 ? '0'+ date.getMinutes():date.getMinutes()

	socket.end(`${year}-${month}-${day} ${hour}:${min}\n`)
})

server.listen(Number(process.argv[2]))

// function zeroFill(i){
// 	return (i < 10 ? "0":"") + i
// }

// function now(){
// 	var d = new Date()
// 	return d.getFullYear() + '-' +
// 		zeroFill(d.getMonth()+1) + '-' +
// 		zeroFill(d.getDate()) + '-' +
// 		zeroFill(d.getHours()) + ':' +
// 		zeroFill(d.getMinutes())
// }