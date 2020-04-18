const rl = require('readline');
const inp = rl.createInterface({
  input:process.stdin,
  output:process.stdout
});
var count = 0;
var lst;
inp.on('line',(line)=>{
  count++;
  if(count==2)
  {
    lst = line.split(' ').map(v => Number(v));
    inp.close();
  }
});
inp.on('close',()=>{console.log(lst.reduce((a,b) => a|b))});
