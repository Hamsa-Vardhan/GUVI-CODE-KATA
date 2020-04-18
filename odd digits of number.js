const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n;
inp.on('line',(line)=>{
  n = line.split('').map(v=>Number(v));
});
inp.on('close',()=>{
  let k = [];
  for(let i of n)
  {
    if(i%2)
    {
      k.push(i);
    }
  }
  console.log(k.length?k.join(' '):'-1');
});
