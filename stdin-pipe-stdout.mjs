import { Transform } from 'stream';

const upperCaseStream = new Transform({
	transform: function (chunk, encoding, cb) {
		const upperCased = chunk.toString().toUpperCase();
		cb(null, upperCased);
	},
});

const reverseStream = new Transform({
	transform(chunk, encoding, cb) {
		const arrayOfChars = chunk.toString().split('');
		const lastChar = arrayOfChars.pop();
		const reversedString = arrayOfChars.reverse().concat(lastChar).join('');
		cb(null, reversedString);
	},
});

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout);

// // pipe to file
// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

// // pipe to stdout
// process.stdin.pipe(process.stdout);
