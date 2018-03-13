const readDir = require('./dir-module.js')
const filePath = process.argv[2]
const fileExtname = process.argv[3]

readDir(filePath, fileExtname, (err,result) => {
	if(err) return console.error('this is an error', err)
	result.forEach((file) => {
		console.log(file)
	})
})