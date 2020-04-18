const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n;
inp.on('line',(line)=>{
  n = line.split('').map(v=>Number(v)**2);
});
inp.on('close',()=>{
  console.log(n.reduce((a,b)=>a+b));
});
