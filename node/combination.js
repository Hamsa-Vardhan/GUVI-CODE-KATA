function fact(n)
{
  if(n==1)
  {
    return 1;
  }
  return n*fact(n-1);
}
const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n,k;
inp.on('line',(line)=>{
  [n,k] = line.split(' ').map(v=>Number(v));
});
inp.on('close',()=>{
  console.log(fact(n)/(fact(n-k)*fact(k)));
});
