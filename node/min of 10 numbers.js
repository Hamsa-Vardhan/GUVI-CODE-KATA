const rl = require('readline');
const inp = rl.createInterface({
  input:process.stdin,
  output:process.stdout
});
var lst;
inp.on('line',(line)=>{
  lst = line.split(' ').map(v=>Number(v));
});
inp.on('close',()=>{
  console.log(Math.min(...lst));
});
