function isprime(n){
  for(let i=2;i{n = Number(line)});
inp.on('close',()=>{
  console.log(isprime(n)?'yes':'no');
});
