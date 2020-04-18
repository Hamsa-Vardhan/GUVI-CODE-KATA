const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n = [];
inp.on('line',(line)=>{n.push(line.split(' ').map(v=>Number(v)))
});
inp.on('close',()=>{console.log(Math.min(...n[1]));})
