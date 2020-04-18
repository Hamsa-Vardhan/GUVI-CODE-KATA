function range(a,b){
    let slt = [];
    for(let i=0;i1;i--)
  {
    if(a%i == 0 && b%i==0)
      return i;
  }
  return 1;
}
const rl = require('readline');
const inp = rl.createInterface({
  input:process.stdin,
  output:process.stdout
});
var n;
inp.on('line',(line)=>{n = Number(line);
inp.close();
});
inp.on('close',()=>{
    var nume = 0;
    var denum = 6**n;
    for(let i of range(0,n))
    {
        nume += (5**i)*(6**(n-i-1));
    }
    console.log(Math.floor(nume/gcd(nume,denum)),Math.floor(denum/gcd(nume,denum)));
});
