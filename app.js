function generateBinary(arrSize) {
    if(arrSize < 1 || arrSize != 1 && arrSize % 2 != 0) {
        throw Error("Array size must be even and greator than or equal to 1!")
    }
    var outputArray = []
    var possible = Math.pow(2, arrSize) // Possible number of binary combinations
    for(let x = 0; x < possible; x++) {
        outputArray.push(x.toString(2).padStart(arrSize, '0'))
    }
    return outputArray
}

let out = generateBinary(4)

console.log(out, "\nMax length:", out.length)