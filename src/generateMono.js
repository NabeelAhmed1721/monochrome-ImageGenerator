const generateBin = require('./generateBin')
const PNGImage = require('pngjs-image');
const fs = require('fs')

// require('events').EventEmitter.prototype._maxListeners = 100;

module.exports = function generateMono(length, output_file_location, callback=()=>{}) {
    var areaPixelAmount = Math.pow(length, 2)
    var combinations = generateBin(areaPixelAmount)
    
    // Folder handling ~ Some OS's can't handle too many files ;)
    reserveData = JSON.parse(fs.readFileSync("reserve.json", 'utf8'))

    var IMAGE_COUNT = 0
    var FOLDER = reserveData.Folder
    fs.mkdirSync(output_file_location+`/${FOLDER}/`) // Make initial directory

    // Go through every combination
    var possibleBinaryComb = Math.pow(2, areaPixelAmount)
    for(let combNumber=reserveData.CombNumber; combNumber<possibleBinaryComb; combNumber++) {
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

        // go through every combination character and add pixel to image
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

        if(IMAGE_COUNT != 0 && IMAGE_COUNT % 4096 == 0) { // 4096 -> 65536 / 4096 = 16 folders | 4096 files per folder seems reasonable. CHANGE as needed.
            IMAGE_COUNT = 0
            FOLDER++
            //fs.mkdirSync(output_file_location+`/${FOLDER}/`)
            fs.writeFile("reserve.json", JSON.stringify({Folder: FOLDER, CombNumber: combNumber}), ()=>{
                console.log("FOLDER #", FOLDER, "COMBINATION #", combNumber);
            })
            break;
        }

        image.writeImage(output_file_location+`/${FOLDER}/${combNumber}.png`, function (err) {
            if (err) throw err;
        });
        IMAGE_COUNT++
    }
    callback()   
}