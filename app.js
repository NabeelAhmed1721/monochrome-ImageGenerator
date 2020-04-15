const generateMono = require('./src/generateMono')

/* 
generateMono(IMAGE_LENGTH_IN_PIXELS, OUTPUT_LOCATION)
-> DEMO:
        generateMono(2, some_directory)
-> OUTPUT:
        ◻◻
        ◻◻

        ANYTHING OVER 3 length needs 4 GB of RAM to compute!
        use: node --max-old-space-size=4096 app.js to use more RAM
*/


generateMono(4, __dirname+"/monochrome/")