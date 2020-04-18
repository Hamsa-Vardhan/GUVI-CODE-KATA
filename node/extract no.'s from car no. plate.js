const rl = require('readline');
const inp = rl.createInterface({
  input:process.stdin,
  output:process.stdout
});
var str;
inp.on('line',(line)=>{
  str = line;
	inp.close();
});
inp.on('close',()=>{
  let sum = 0;
  for(let i of str){
    if(!isNaN(Number(i)))
    {
      sum += Number(i);	
    }
  }
  console.log(sum);
});
