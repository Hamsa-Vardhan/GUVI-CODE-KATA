const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var a,d,n;
inp.on('line',(line)=>{[a,d,n] = line.split(' ').map(v=>Number(v))});
inp.on('close',()=>{
  console.log((n*(2*a+d*(n-1)))/2);
});
