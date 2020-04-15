const generateBin = require('./src/generateBin')

var fs = require('fs');

const writeStream = fs.createWriteStream('array.txt');

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