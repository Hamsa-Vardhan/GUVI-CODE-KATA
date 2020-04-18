function range(a,b)
{
  let lst = [];
  for(let i=a;i{n = Number(line)});
inp.on('close',()=>{
  console.log(range(0,n+1).reduce((a,b) => a+b));
});
