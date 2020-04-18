const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var useri = [];
inp.on('line',(line)=>{useri.push(line.split(' ').map(v=>Number(v)));
});
inp.on('close',()=>{
  var sum = 0;
  for(let i=0;iuseri[0]-4)
    {
      sum += useri[1][i];
    }
  }
  console.log((useri[1].map(a => a-sum)).join(' '));
});
