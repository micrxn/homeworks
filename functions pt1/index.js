let numberOne = (number) => number.toString().length
console.log(numberOne(32));
let oddEvenNumber = (number) => {
    if(number % 2 === 0){
        return `Even`
    } else {
        return `Odd`
    }
}
console.log(oddEvenNumber(3))
let positiveNegativeNumber = (number) => {
    if(number > 0){
        return `positive`
    } else if(number < 0){
        return `negative`
    } else {
        return `0 is neither positive or negative`
    }
}
console.log(positiveNegativeNumber(0))

let resultFunction = (number) => {
    console.log(numberOne(number))
    console.log(oddEvenNumber(number))
    console.log(positiveNegativeNumber(number))
    
}

resultFunction(2)