const rl = require('readline');
const inp = rl.createInterface({
  input:process.stdin,
  output:process.stdout
});
var a,b,c;
inp.on('line',(line)=>{
	[a,b,c] = line.split(' ').map(v=>Number(v));
});
inp.on('close',()=>{
	(a**2==b**2+c**2 || b**2 == a**2+c**2 || c**2 == a**2 + b**2)?console.log('yes'):console.log('no')
});
