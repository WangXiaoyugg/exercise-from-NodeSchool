const http = require('http')

http.get(process.argv[2],(res) => {
	res.setEncoding('utf-8')
	let rawData = '';
	res.on('data',(chunk) => {
		rawData += (chunk)
	})

	res.on('end',() => {
		console.log(rawData.length)
		console.log(rawData)
	})

	res.on('error',(e) => {
		console.log(e)
	})

})

/*
	const bl = require('bl')
	http.get(process.argv[2],(res) => {
		res.pipe(bl((err,data) => {
			if(err) return console.log(err)
			data = data.toString()
			console.log(data.length)
			console.log(data)
		}))
	})

 */