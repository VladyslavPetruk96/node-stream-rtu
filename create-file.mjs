// How to run program: "node create-file.mjs <filename> <linesQty>" =>
// => node create-file.mjs file.txt 1000

import fs from 'fs';
import path from 'path';

if (!process.argv[2] || !process.argv[3]) {
	console.log('Filename and lines qty must be supplied as arguments');
	process.exit(0);
}

const fileName = process.argv[2];
const lineQty = Number(process.argv[3]);
if (isNaN(lineQty)) {
	console.log('Lines qty must be a number');
	process.exit(0);
}
// Поток для записи данних в файл
const writeStream = fs.createWriteStream(path.join('./files', fileName));

for (let i = 1; i <= lineQty; i++) {
	writeStream.write(
		`This is a line number ${i} in the automatically generated file\n`
	);
}

writeStream.end(() => {
	console.log(
		`Automatically generated file ${fileName} with ${lineQty} lines was created`
	);
});
