let num = 103.941

// toFixed, broj decimala 0-20
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// 0 - 1
console.log(randomNum)

// challenge
// 1 - 5 - true if correct - false if not correct
let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let numRand = Math.floor(Math.random() * (max - min + 1)) + min
    return numRand === guess
}

// poziv
console.log(makeGuess(1))