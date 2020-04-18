const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var str;
inp.on('line',(line)=>{str = line});
inp.on('close',()=>{
  console.log(parseInt(str,16));
});
