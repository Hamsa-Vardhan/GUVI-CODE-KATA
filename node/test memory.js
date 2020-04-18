const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var lst,ind;
var c = 0;
inp.on('line',(line)=>{
  c++;
  if(c==2)
    lst = line.split(' ').map(v=>Number(v));
  else if(c==4)
    ind = line.split(' ').map(v=>Number(v));
});
var count = new Object();
var sum;
inp.on('close',()=>{
  let k = [];
  for(let i of ind)
  {
    sum = 0;
    if(lst.includes(i))
    {
      for(let j of lst)
      {
        if(i==j)
        {
          sum++;
        }
      }
      k.push(sum);
    }
    else
      k.push('Not Present');
  }
  console.log(k.join(' '));
});
