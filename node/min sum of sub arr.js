const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var user = [];
inp.on('line',(line)=>{user.push(line.split(' ').map(v=>Number(v)))});
inp.on('close',()=>{
  console.log(Math.min(...user[1]));
});
