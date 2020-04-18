function space(lst,n)
{
  let [l,r] = [[],[]];
  let air = 0;
  l.push(lst[0]);
  for(let i=1;i=0;i--)
    r[i] = Math.max(r[i+1],lst[i]);
  for(let i=0;i{
  count++;
  if(count == 1)
    n = Number(line)
  else if(count==2)
    lst = line.split(' ').map(v=>Number(v));
});
inp.on('close',()=>{
  console.log(space(lst,n));
});
