function factors(n)
{
  let lst = [];
  for(let i=1;i<=n;i++)
  {
    if(n%i==0)
    {
      lst.push(i);
    }
  }
  return lst;
}
const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n;
inp.on('line',(line)=>{n=Number(line)});
inp.on('close',()=>{console.log(factors(n).join(' '))});
