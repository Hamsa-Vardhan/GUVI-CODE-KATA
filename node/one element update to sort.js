thematics
function swap(a,b) 
{
  let temp = a;
  a = b;
  b = temp;
  return [a,b]
}
const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var lst;
inp.on('line',(line)=>{lst = line.split(' ').map(v=>Number(v))});
inp.on('close',()=>{
  let j = -1;
  for(let i=0;ilst[i+1])
    {
    j = i;
    }
  }
  if(j!=-1)
  {
  [lst[j],lst[j+1]] = swap(lst[j],lst[j+1]);
  if(lst.join('') == lst.sort((a,b)=>a-b).join(''))
    console.log(j);
    else
      console.log('-1');
  }
  else
    console.log(j);
});
