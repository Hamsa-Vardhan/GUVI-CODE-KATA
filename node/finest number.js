function fine(n){
  for(let i=1;i{
  count++;
  if(count==2){
    lst = line.split(' ').map(v=>Number(v));
    inp.close();
  }
});
inp.on('close',()=>{
  var k =[];
  for(i of lst){
    if(fine(i))
       k.push(i);
  }
	if(k.length)
    console.log(k.sort((a,b)=>a-b).join(' '));
  else
    console.log('-1');
});
