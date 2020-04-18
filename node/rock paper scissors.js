const rl = require('readline');
const inp = rl.createInterface({
  input:process.stdin,
  output:process.stdout
});
var in1,in2;
var win = {
  'R' : 1,
  'P' : 2,
  'S' : 3,
   3  : 'p',
   4  : 'R',
   5  : 'S'
}
inp.on('line',(line)=>{
  [in1,in2] = line.split(' ');
  inp.close();
});
inp.on('close',()=>{
  (in1===in2)?console.log('D'):console.log(win[win[in1]+win[in2]]);
  
});
