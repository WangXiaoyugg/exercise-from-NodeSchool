const fs = require('fs')
let ret =fs.readFileSync(process.argv[2], 'utf-8');
let fileLineCount = ret.split('\n').length - 1;
console.log(fileLineCount);

 /*
   标准答案
   var contents = fs.readFileSync(process.argv[2])
   var lines = contents.toString().split('\n').length - 1
   console.log(lines)		
 */