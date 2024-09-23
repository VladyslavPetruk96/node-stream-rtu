import fs from 'fs';

const fileName = './files/third.txt';
const copiedFileName = './files/third-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedFileName);

readStream.pipe(writeStream);

readStream.on('end', () => {
	console.log('Read Stream ended');
});
writeStream.on('finish', () => {
	console.log('File was copied');
});
writeStream.on('close', () => {
	console.log('Write Stream closed');
});
