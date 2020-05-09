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
	console.log(2*input[0]**3+input[0]**2);
});
