const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n;
inp.on('line',(line)=>{
  n = Number(line);
});
inp.on('close',()=>{
  console.log(Math.pow(2,Math.ceil(Math.log(n+0.5)/Math.log(2))));
});
