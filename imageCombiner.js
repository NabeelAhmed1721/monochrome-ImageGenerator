const mergeImg = require("merge-img")


// var startingImage = 0;

// for(let x=0; x<4; x++) { // Cycle X

//     var imageArray = []
//     for(let i=startingImage; i<startingImage+4; i++) {  // we want the image to be 16x32
//         var file = `./monochrome/0/${i}.png`
//         imageArray.push(file)
//     }

//     mergeImg(imageArray).then((img)=> {
//         img.write(`combined/out${x}.png`, ()=>console.log("Done!"))
//     })

//     startingImage+=4
// }

var imageArray = []
for(let x=0; x<4; x++) {
    let file = `./combined/out${x}.png`
    imageArray.push(file)
}

    mergeImg(imageArray, {direction: true}).then((img)=>{
        img.write(`out.png`, ()=>console.log("Done!"))
    })

console.log(imageArray);