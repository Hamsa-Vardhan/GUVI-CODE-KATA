function factors(n)
{
    let lst = [];
    for(let i=1;i<=n;i++)
    {
        if(n%i==0)
        lst.push(i);
    }
  let k = lst.length;
  for(let i=0;i{n = Number(line);});
inp.on('close',()=>{console.log(factors(n))});
