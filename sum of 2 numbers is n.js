const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n;
inp.on('line',(line)=>{
  n = Number(line);
});
inp.on('close',()=>{
  for(let i=1;i<n;i++)
  {
   for(let j=1;j<n;j++)
   {
    if(i+j==n)
    {
      console.log(i,j);
    }
   }
  }
});
