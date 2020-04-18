const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var a,b,x;
inp.on('line',(line)=>{[a,b,x] = line.split(' ').map(v=>Number(v))});
inp.on('close',()=>{console.log(a*x+b)});
