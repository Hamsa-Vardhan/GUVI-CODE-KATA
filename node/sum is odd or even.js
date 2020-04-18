const rl = require('readline');
const inp = rl.createInterface({
  input:process.stdin,
  output:process.stdout
});
var N,M;
inp.on('line',(line)=>{
  [N,M] = line.split(' ').map(v => Number(v));
});
inp.on('close',()=>{
  (N+M)%2?console.log('odd'):console.log('even');
});
