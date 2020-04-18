function isg(n){
  let sum = 0;
  let prod = 1;
  for(let i of n.split('')){
    sum += Number(i);
    prod *= Number(i);
  }
  return (sum+prod).toString()==n?true:false;
}
const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var num;
inp.on('line',(line)=>{num = line.trim()});
inp.on('close',()=>{
  isg(num)?console.log('Great'):console.log('no');
});
