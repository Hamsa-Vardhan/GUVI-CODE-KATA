const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var n = [];
inp.on('line',(line)=>{n.push(line.split(' ').map(v=>Number(v)))
});
inp.on('close',()=>{
  if(n[0]<6)
    console.log('0');
  else
    console.log(n[1].slice(0,3).reduce((a,b)=>a+b)==n[1].slice(n[0]-3,n[0]).reduce((a,b)=>a+b)?'1':'0');
})
