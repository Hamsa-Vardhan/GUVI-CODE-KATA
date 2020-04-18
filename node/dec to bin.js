function tobinary(n)
{
  if(n==1)
    return '1';
  else if(n==0)
    return '0';
  else
    return tobinary(Math.floor(n/2)) + (n%2).toString()
}
const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n;
inp.on('line',(line)=>{n = Number(line)});
inp.on('close',()=>{console.log(tobinary(n))});
