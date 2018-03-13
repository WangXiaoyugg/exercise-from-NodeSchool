const fs = require('fs')
const path = require('path')
let filePath = process.argv[2];
let fileExtname = '.' + process.argv[3];

fs.readdir(filePath,(err,files) => {
	if(err) return console.log(err);
	files.forEach((file) => {
		if(path.extname(file) === fileExtname) {
			console.log(file)
		}
	})
	
})
