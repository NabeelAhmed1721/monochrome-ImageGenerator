function generateBinary(arrSize) {
    var outputArray = []
    var possible = Math.pow(2, arrSize) // Possible number of binary combinations
    for(let x = 0; x < possible; x++) {
        outputArray.push(x.toString(2).padStart(arrSize, '0'))
    }
    return outputArray
}

let out = generateBinary(5)
console.log(out, "\nMax length:", out.length)