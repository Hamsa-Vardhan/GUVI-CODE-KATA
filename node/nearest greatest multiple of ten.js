const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n;
inp.on('line',(line)=>{n = Number(line)});
inp.on('close',()=>{
  let i =n+1
  while(i>n)
  {
    if(i%10==0)
    {
      console.log(i);
      break;
    }
    i++;
  }
});
