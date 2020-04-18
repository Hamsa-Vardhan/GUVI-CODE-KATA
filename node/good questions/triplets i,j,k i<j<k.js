function first(n){
	let i=2;
	let sum = 0;
	while(n-i)
	{
		sum = sum+n-i;
		i++;
	}
	return sum;
}
function find(n){
	if(n==3){
		return 1;
	}
	else
	{
		return (first(n)+find(n-1));
	}
}
const rl = require('readline');
const inp = rl.createInterface({
  input:process.stdin,
  output:process.stdout
});
var lst,n;
var count = 0;
inp.on('line',(line)=>{
  count++;
  if(count == 2){
    lst = line.split(' ').map(v=>Number(v));
  }
   else if(count == 1){
     n = Number(line);
   }
    else
    {
      inp.close();
    }
});
inp.on('close',()=>{
  console.log(n-2);
  
});
