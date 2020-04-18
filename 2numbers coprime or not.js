function gcd(a,b){
  for(let i=Math.min(a,b);i>1;i--)
  {
    if(a%i == 0 && b%i==0)
      return i;
  }
  return 1;
}
const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var a,b;
inp.on('line',(line)=>{
  [a,b] = line.split(' ').map(v => Number(v));
});
inp.on('close',()=>{
  console.log(gcd(a,b)==1?'1':'0');
});
