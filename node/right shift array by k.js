const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var user = [];
var n,k,lst;
inp.on('line',(line)=>{user.push(line.split(' ').map(v=>Number(v)));
    [n,k] = user[0];
lst = user[1];
});
inp.on('close',()=>{
  console.log(lst.slice(k-1,n).concat(lst.slice(0,k-1)).join(' '));
});
