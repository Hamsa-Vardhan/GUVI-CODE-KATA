const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var user = [];
inp.on('line',(line)=>{user.push(line.split(' ').map(v=>Number(v)));});
inp.on('close',()=>{
  if((user[0][0]==user[1][0] && user[0][0]==user[2][0]) || (user[0][1]==user[1][1] && user[0][1]==user[2][1]))
    console.log('yes')
  else
  console.log(Math.abs((user[1][1]-user[0][1])/(user[1][0]-user[0][0])) == Math.abs((user[2][1]-user[0][1])/(user[2][0]-user[0][0]))?'yes':'no');
});
