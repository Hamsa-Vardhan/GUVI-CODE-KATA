const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n,k;
inp.on('line',(line)=>{[n,k] = line.split(' ').map(v=>Number(v))});
inp.on('close',()=>{
  let num = k;
  while(num<=n)
  {
    num*=k;
  }
  console.log(num==n?'yes':'no);
});
