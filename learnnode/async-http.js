const http = require('http')
const bl = require('bl')
const results = [] // 队列保存数据
let count = 0 // 计数器

// 打印结果
function printResults() {
	for(let i=0;i<3;i++){
		console.log(results[i])
	}
}

function httpGet(index) {
	http.get(process.argv[2 + index],(res) => {
		res.pipe(bl((err,data) => {
			if(err) return console.log(err)

			// 往队列里写数据，计数器加1		
			results[index] = data.toString()
			count++
					
			if(count === 3){
				printResults()
			}		
		}))
	})
}


for (let i = 0; i < 3; i++){
	httpGet(i)
}