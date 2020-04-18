const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var num; 
inp.on('line',(line)=>{num = line.split('').map(v=>Number(v))});
inp.on('close',()=>{
    let out = [];
    let count;
    for(let i of [...new Set(num)])
    {
        count = 0;
        for(let j of num)
        {
            if(i==j)
            count++;
        }
        out.push(count);
    }
  console.log([...new Set(out)].length==1?'1':'0');
});
