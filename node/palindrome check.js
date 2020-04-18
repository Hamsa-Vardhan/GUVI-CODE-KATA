function ispal(n){
  return n.split('').join('') == n.split('').reverse().join('')?true:false;
}
const rl = require('readline');
const inp = rl.createInterface({
  input:process.stdin,
  output:process.stdout
});
var n;
inp.on('line',(line)=>{n = Number(line)});
inp.on('close',()=>{
  var count = 0;
  for(let i=1;i<=n;i++){
    if(ispal(i.toString()))
      count++;
  }
  console.log(count);
});
