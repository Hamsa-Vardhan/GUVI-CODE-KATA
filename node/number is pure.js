function ispure(n){
  (n.split('').map(v => Number(v)).reduce((a,b)=>a+b))%3?false:true;
}
const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var num;
inp.on('line',(line)=>{num = line.trim()});
inp.on('close',()=>{
  console.log(ispure(num)?'yes':'not');
});
