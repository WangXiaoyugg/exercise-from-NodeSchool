let total = 0;
let len = process.argv.length;
for(i = 2; i < len; i++){
	total += Number(process.argv[i])
}

console.log(total);