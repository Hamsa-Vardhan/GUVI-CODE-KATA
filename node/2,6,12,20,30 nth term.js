 const rl = require('readline');
const inp = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});
let input;
inp.on('line', (line) => {
	input = Number(line);
});
inp.on('close', () => {
	console.log(input**2 + input);
});
