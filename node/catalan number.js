function catalan(n) {
	let out = [ 1, 1 ];
	let result;
	for (let i = 2; i <= n + 1; i++) {
		result = 0;
		for (let j = 1; j <= i - 1; j++) {
			result += out[j] * out[i - j];
		}
		out.push(result);
	}
	return n == 1 ? [ 1, 1 ].join(' ') : out.slice(1).join(' ');
}
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
	console.log(catalan(input));
});
