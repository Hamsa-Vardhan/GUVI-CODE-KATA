  const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var str;
inp.on('line',(line)=>{
  str = line.split(' ');
});
inp.on('close',()=>{
  max = 0;
  for(let i of str)
  {
    
    if(!isNaN(Number(i)) && max < Number(i))
    {
      max = Number(i);
    }
  }
  console.log(max);
});
