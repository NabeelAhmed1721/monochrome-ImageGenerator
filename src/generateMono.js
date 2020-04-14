const generateBin = require('./generateBin')
const PNGImage = require('pngjs-image');

module.exports = function generateMono(length) {
    var combinations = generateBin(length)
    // Create square image
    var image = PNGImage.createImage(length, length)
    
}
