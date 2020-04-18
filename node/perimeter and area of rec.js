function side(p,a)
{
  for(let i=1;i
{
  [p,a] = line.split(' ').map(v=>Number(v));
});
inp.on('close',()=>{
  console.log(side(p,a)?'yes':'no');
});
