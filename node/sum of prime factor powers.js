function isprime(n){
  for(let i=2;i{n = Number(line);inp.close();});
inp.on('close',()=>{
    let sum;
    out = (Math.min(...factors(n))+' '+show(Math.max(...factors(n)))).split(' ').map(v=>Number(v));
	for(let i of [...new Set(out)])
    {
        sum = 0;
        for(let j of out)
        {
            if(i==j)
            {
                sum++;
            }
        }
        primef[i] = sum;
    }
    sum = 0;
    for(let i of [...new Set(out)])
    {
        sum += primef[i];
    }
    console.log(sum);
});
