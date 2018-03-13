const fs = require('fs')
const path = require('path')

module.exports = function(dir, extname, callback) {

	fs.readdir(dir,(err,files) => {
		if(err) {
			return callback(err)
		} 

		files = files.filter((file) => {
			return path.extname(file) === '.' + extname
		})

		callback(null, files)
	})
}