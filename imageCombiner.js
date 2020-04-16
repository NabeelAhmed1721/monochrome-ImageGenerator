const mergeImg = require("merge-img")

/*

Change starting image
Folder ID 
Cycle X

*/


// var FOLDER_ID = 15 // Change to folder
// var startingImage = 4096 * FOLDER_ID;

// var offset = 256

// for(let x=(FOLDER_ID*16); x<(FOLDER_ID*16)+16; x++) { // Cycle X

//     var imageArray = []
//     for(let i=startingImage; i<startingImage+offset; i++) {  // we want the image to be 16x32
//         var file = `./monochrome/${FOLDER_ID}/${i}.png`
//         imageArray.push(file)
//     }

//     mergeImg(imageArray).then((img)=> {
//         img.write(`combined/out${x}.png`, ()=>console.log("Done!"))
//     })

//     startingImage+=offset
// }

var imageArray = []
for(let x=0; x<256; x++) {
    let file = `./combined/out${x}.png`
    imageArray.push(file)
}

    mergeImg(imageArray, {direction: true}).then((img)=>{
        img.write(`out.png`, ()=>console.log("Done!"))
    })

console.log(imageArray);