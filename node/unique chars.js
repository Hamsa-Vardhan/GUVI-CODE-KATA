function unique(lst)
{
  let k=0,sum = 0;
  for(let i of [...new Set(lst)])
  {
    k = 0;
    for(let j of lst)
    {
      if(i==j)
      {
        k++;
      }
    }
    if(k==1)
    {
      sum++;
    }
  }
  return sum;
}
const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var str;
inp.on('line',(line)=>{
  str = line.split('')
});
inp.on('close',()=>{
  console.log(unique(str)?unique(str):'-1');
});
