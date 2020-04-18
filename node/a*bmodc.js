const rl = require('readline');
const inp = rl.createInterface({
  input:process.stdin,
  output:process.stdout
});
var a,b,c;
inp.on('line',(line)=>{
  [a,b,c] = line.split(' ').map(v=>Number(v))
});
inp.on('close',()=>{
  console.log((a*b)%c);
});
