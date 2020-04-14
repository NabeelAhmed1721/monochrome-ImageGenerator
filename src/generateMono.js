const generateBin = require('./generateBin')
const PNGImage = require('pngjs-image');

// require('events').EventEmitter.prototype._maxListeners = 100;

module.exports = function generateMono(length, output_file_location, callback=()=>{}) {
    var areaPixelAmount = Math.pow(length, 2)
    var combinations = generateBin(areaPixelAmount)

    // Go through every combination
    var possibleBinaryComb = Math.pow(2, areaPixelAmount)
    for(let combNumber=0; combNumber<possibleBinaryComb; combNumber++) {
        
        // Create square image
        var image = PNGImage.createImage(length, length)
        var Y_LOCATION = 0
        var X_LOCATION = 0
        var MID_POINT = length-1


        // Set background to white
        for(let y=0; y<image.getHeight(); y++) {
            for(let x=0; x<image.getWidth(); x++) {
                image.setAt(x, y, { red:255, green:255, blue:255, alpha:255 });
            }
        }

        // go through every combination character
        for(let i = 0; i < combinations[combNumber].length; i++) {

            if(combinations[combNumber][i] == '1') {
                image.setAt(X_LOCATION, Y_LOCATION, { red:0, green:0, blue:0, alpha:255 });
            } else {
                image.setAt(X_LOCATION, Y_LOCATION, { red:255, green:255, blue:255, alpha:255 });
            }

            X_LOCATION++

            if(X_LOCATION > MID_POINT) {
                X_LOCATION = 0
                Y_LOCATION++
            }
        }

        image.writeImage(output_file_location+`/${combNumber}.png`, function (err) {
            if (err) throw err;
        });
    }
    callback()   
}