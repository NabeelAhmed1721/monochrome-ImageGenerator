const generateBin = require('./generateBin')
const PNGImage = require('pngjs-image');

module.exports = function generateMono(length, output_file_location) {
    var combinations = generateBin(Math.pow(length, 2))
    // Create square image
    var image = PNGImage.createImage(length, length)


    // Set background to white
    for(let y=0; y<image.getHeight(); y++) {
        for(let x=0; x<image.getWidth(); x++) {
            image.setAt(x, y, { red:255, green:255, blue:255, alpha:255 });
        }
    }

    
    

    image.writeImage(output_file_location+"/out.png", function (err) {
        if (err) throw err;
    });
}