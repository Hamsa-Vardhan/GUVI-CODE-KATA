const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n,m;
inp.on('line',(line)=>{[n,m] = line.split(' ').map(v=>Number(v))});
inp.on('close',()=>{
  console.log((n*m).toFixed(5));
});
