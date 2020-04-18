function isvowel(n)
{
  let vow = ['a','e','i','o','u','A','E','I','O','U'];
  vow.includes(n)?true:false;
}
const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var str;
inp.on('line',(line)=>{str = line.split(' ')});
inp.on('close',()=>{
  let sum = 0;
  for(let i of str)
  {
    if(isvowel(i))
    {
      sum += i.charCodeAt(0);
    }
  }
  console.log(sum%8?'1':'0');
});
