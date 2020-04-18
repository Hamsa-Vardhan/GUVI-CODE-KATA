const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var l,b,h;
inp.on('line',(line)=>{[l,b,h] = line.split(' ').map(v=>Number(v))});
inp.on('close',()=>{
  console.log(2*(l*b+b*h+l*h),l*h*b);
});
