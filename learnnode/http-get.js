const http = require('http')

// http.get(process.argv[2],(response) => {
// 	const {statusCode} = response;
// 	const contentType = response.headers['content-type']

// 	let error;
// 	if(statusCode !== 200) {
// 		error = new Error('请求失败.\n' + `状态码:${statusCode}`)
// 	} 
// 	// else if (!/^application\/json/.test(contentType)) {
// 	// 	 error = new Error('无效的 content-type.\n' +
//  //                      `期望 application/json 但获取的是 ${contentType}`);
// 	// }

// 	if (error) {
// 		console.error(error.message)
// 		response.resume()
// 		return;
// 	}

// 	response.setEncoding('utf-8')
// 	let rawData = ''
// 	response.on('data',(chunk) => {
// 		rawData += chunk;
// 		process.stdout.write(chunk+'\n');
// 	})

// 	response.on('end', () => {
// 		try {
			
// 		} catch(e) {
// 			console.error(e.message)
// 		}		
// 	}).on('error', (e) => {
// 		console.error(`错误: ${e.message}`);
// 	})
// })
// 

http.get(process.argv[2],(res) => {
	res.setEncoding('utf-8')
	res.on('data',console.log)
	res.on('error',console.error)
}).on('error',console.error)