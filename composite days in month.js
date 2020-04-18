var month={
  'JANUARY' : 31,
  'FEBRUARY' : 28,
  'MARCH' : 31,
  'APRIL' : 30,
  'MAY'  : 31,
  'JUNE' : 30,
  'JULY': 31,
  'AUGUST' : 31,
  'SEPTEMBER' : 30,
  'OCTOBER' : 31,
  'NOVEMBER' : 30,
  'DECEMBER' : 31
}
function isprime(m)
{
  for(let i=2;i{
  [m,y] = line.split(' ');
});
inp.on('close',()=>{
  if(leap(Number(y)))
     month['FEBRUARY'] = 29;
  let sum = 0;
  for(let i=2;i<=month[m.toUpperCase()];i++)
  {
    if(isprime(i))
    {
      sum++;
    }
  }
  console.log(sum);
});
