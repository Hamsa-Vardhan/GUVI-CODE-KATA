const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var count=0;
var lst,num;
inp.on('line',(line)=>{
  count++;
  if(count==2)
    lst = line.split(' ').map(v=>Number(v));
  else if(count == 3)
    num = Number(line)
});
inp.on('close',()=>{
  let k=[];
  for(let i of lst)
  {
    i%num==0?k.push('1'):k.push('0');
  }
  console.log(k.join(' '));
});
