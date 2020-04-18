const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n;
inp.on('line',(line)=>{
  n = line.split('');
  inp.close();
});
inp.on('close',()=>{
  console.log([...new Set(n)].length==2?'Saturated':'Unsaturated');
});
