const rl = require('readline');
const inp = rl.createInterface({
  input:process.stdin,
  output:process.stdout
});
var a,b,c;
inp.on('line',(line)=>{
  [a,b,c] = line.split(' ').map(v => Number(v));
});
var istriangle = (a,b,c) => {(a>b+c && b>a+c && c>a+b)?false:true};
inp.on('close',()=>{
  !(istriangle(a,b,c) || a==b || b==c || a==c) ? console.log('yes'):console.log('no');
});
