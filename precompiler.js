// I suggest you have 8gb of RAM ready to do this
// Run this to allocate 8gb of RAM -> node --max-old-space-size=8192 app.js

const generateBin = require('./src/generateBin')

var fs = require('fs');

const writeStream = fs.createWriteStream('binaryCombinations.txt');

const pathName = writeStream.path;

let array = generateBin(Math.pow(5, 2)) // Precompile 5x5 square

array.forEach(value => writeStream.write(`${value}\n`));

writeStream.on('finish', () => {
   console.log(`wrote all the array data to file ${pathName}`);
});
writeStream.on('error', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`)
});
writeStream.end();