const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n;
inp.on('line',(line)=>{n = line.split('')});
inp.on('close',()=>{
  console.log(Number(n.reverse().join('')));
});
