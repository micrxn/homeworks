let userInput = document.getElementById("userInput");
let btn = document.getElementById("search");
let result = document.getElementById("result");
let myMovies = ["LOTR", "fast and furious", "how high"]

function checkMovie(movies, input){
    for(let i = 0; i < movies.length; i++){
        if(input.toLowerCase() === movies[i].toLowerCase()){
            return result.innerHTML = `<h1 style="color: green">Movie can be rented</h1>`        
        }
    }    
    return result.innerHTML = `<h1 style="color: red">Movie cant be rented</h1>`
}

btn.addEventListener("click", function(){
    checkMovie(myMovies, userInput.value)
})