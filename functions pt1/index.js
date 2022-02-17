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

let colorText = document.getElementById("colorText");
let textSize = document.getElementById("textSize");
let btn = document.getElementById("apply");
let result = document.getElementById("result")
let textColor = (element, color) => element.style.color = color.value
let textSizeFunc = (element, textSize) => element.style.fontSize = // ne znam koe properti se koristi za font
btn.addEventListener("click", () => {
    textColor(result, colorText)
    textSizeFunc(result, textSize)
})