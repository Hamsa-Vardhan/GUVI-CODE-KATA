const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n;
inp.on('line',(line)=>{n = Number(line);});
inp.on('close',()=>{
  console.log(isNaN(n)?'no':'yes');
});
