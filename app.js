const generateMono = require('./src/generateMono')

/* 
generateMono(IMAGE_LENGTH_IN_PIXELS, OUTPUT_LOCATION)
-> DEMO:
        generateMono(2, __dirname)
-> OUTPUT:
        ◻◻
        ◻◻

        ANYTHING OVER 4 length needs 4 GB of RAM to compute!
        use: node --max-old-space-size=4096 app.js to use more RAM
*/


generateMono(2, __dirname+"/monochrome/")