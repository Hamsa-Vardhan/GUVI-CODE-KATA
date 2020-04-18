const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var lst;
inp.on('line',(line)=>{lst = line.split(' ').map(v=>Number(v))});
inp.on('close',()=>{
  let sum = 0;
  for(let i of lst)
  {
    if(i<0)
    {
      sum += i;
    }
  }
  console.log(sum);
});
