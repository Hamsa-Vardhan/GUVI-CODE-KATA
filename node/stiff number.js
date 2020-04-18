function range(a,b)
{
  let lst = [];
  for(let i=a;i=2;i--)
  {
    if( a%i==0 && b%i==0)
    {
      return i;
    }
  }
  return 1;
}
const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n;
inp.on('line',(line)=>{n = Number(line);});
inp.on('close',()=>{
  let k = 0;
  for(i of range(2,n))
  {
    for(j of range(2,n))
    {
      if(gcd(i,j)==1 && i+j==n)
      {
        k=1;
      }
    }
  }
  if(n==1)
    console.log('not stiff');
  else
  console.log(k?'Stiff':'not stiff');
});
