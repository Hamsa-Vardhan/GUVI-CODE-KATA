var month={
  'JANUARY' : 1,
  'FEBRUARY' : 2,
  'MARCH' : 3,
  'APRIL' : 4,
  'MAY'  : 5,
  'JUNE' : 6,
  'JULY': 7,
  'AUGUST' : 8,
  'SEPTEMBER' : 9,
  'OCTOBER' : 10,
  'NOVEMBER' : 11,
  'DECEMBER' : 12
}
var mo = [1,3,5,7,8,10,12];
function isel(slt)
{
    if(mo.includes(month[slt[1].toUpperCase()]))
    {
      if(Number(slt[2]) < 1987)
        return true;
      else if(Number(slt[2]) > 1987)
        return false;
      else
      {
        if(month[slt[1].toUpperCase()] < 7)
          return true;
        else if (month[slt[1].toUpperCase()] > 7)
          return false;
        else
        {
          if(Number(slt[0]) <= 22)
            return true;
          else
            return false;
        }
      }
    }
    else
    return false;
}
const rl = require('readline');
const inp = rl.createInterface({
	input:process.stdin,
	output:process.stdout
});
var count = 0;
var lst = [];
var n;
inp.on('line',(line)=>{
  count++;
  if(count==1)
    n = Number(line);
  else if(count==2){
    let k = [];
    let j = 0;
    for(let i of line.split(' ')){
      j++;
      k.push(i);
      if(j==3)
      {
        lst.push(k);
        j=0;
        k = [];
      }
    }
  }
});
inp.on('close',()=>{
console.log(lst.filter(isel));
});
