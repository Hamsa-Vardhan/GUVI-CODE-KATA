const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var lst;
var c = 0;
inp.on('line',(line)=>{
  c++;
  if(c==2)
    lst = line.split(' ').map(v=>Number(v));
});
var count = new Object();
inp.on('close',()=>{
  let min = lst.length;
  for(let i of [...new Set(lst)])
  {
    let num = 0;
    for(let j of lst)
    {
      if(i==j)
      {
        num++;
      }
    }
    count[i] = num;
    if(min>num)
      min = num;
  }
  let k = [];
  for(let i of [...new Set(lst)])
  {
    if(count[i] == min)
      k.push(i);
  }
  console.log(k.sort((a,b)=>b-a).join(' '));
});
