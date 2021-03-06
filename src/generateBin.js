module.exports = function generateBinary(arrSize) {
    if(arrSize < 1) {
        throw Error("Array size must be greator than or equal to 1!")
    }
    var outputArray = []
    var possible = Math.pow(2, arrSize) // Possible number of binary combinations
    for(let x = 0; x < possible; x++) {
        outputArray.push(x.toString(2).padStart(arrSize, '0'))
    }
    return outputArray
}