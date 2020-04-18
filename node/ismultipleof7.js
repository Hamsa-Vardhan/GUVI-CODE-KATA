const rl = require('readline');
const inp = rl.createInterface({
  input:process.stdin,
  output:process.stdout
});
var n;
inp.on('line',(line)=>{n = Number(line);});
inp.on('close',()=>{
  n%7?console.log('no'):console.log('yes');
});
