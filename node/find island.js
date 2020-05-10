const rl = require('readline');
const inp = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input = [];
inp.on('line', (line) => {
	input.push(line.split(' ').map((v) => Number(v)));
});
inp.on('close', () => {
	let out = input.filter((v) => v.join('') == '010').length;
	console.log(out ? out : '-1');
});
