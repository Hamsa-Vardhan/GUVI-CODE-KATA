function rotate(lst, k) {
	return lst.slice(k).concat(lst.slice(0, k));
}
const rl = require('readline');
const inp = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});
let str, num;
inp.on('line', (line) => {
	[ str, num ] = line.split(' ');
});
inp.on('close', () => {
	let out = rotate(str.toUpperCase().split(''), Number(num));
	let cases = str.split('').filter((v) => v == v.toLowerCase()).map((v) => str.indexOf(v));
	for (let i = 0; i < str.length; i++) if (cases.includes(i)) out[i] = out[i].toLowerCase();
	console.log(out.join(''));
});
	
