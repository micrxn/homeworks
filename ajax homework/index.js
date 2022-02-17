let exerciseOne = document.getElementById("resultEx1");
let exerciseTwo = document.getElementById("resultEx3");
let exerciseThree = document.getElementById("resultEx3");
let btnOne = document.getElementById("buttonOne");
let btnTwo = document.getElementById("buttonTwo");
let btnThree = document.getElementById("buttonThree");
let urlExOne = "https://thronesapi.com/api/v2/Characters/2";
let urlExTwo = "https://thronesapi.com/api/v2/Continents";
let urlExThree = "https://thronesapi.com/api/v2/Characters";

//exercise one
function exOneCall(url){
    let promise = fetch(url)
    promise
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            console.log(response);
            printResultsOne(response, exerciseOne)
        })
        .catch(function(error){
            console.log(error);
        });

};
function printResultsOne(data, element){
    // element.innerHTML += "";
    for (let i = 0; i < data.length; i++){
        element.innerHTML += `
            <td>
                <tr>Name: ${data[i].firstName}</tr><br/>
                <tr>Last Name: ${data[i].lastName}</tr><br/>
                <tr>Full Name: ${data[i].fullName}</tr><br/>
                <tr>Title: ${data[i].title}</tr><br/>
                <tr>family: ${data[i].family}</tr><br/>
                <tr><img src="${data[i].imageUrl}"/></tr><br/>
            </td>
        `
    }
};


btnOne.addEventListener("click", function(){
    exOneCall(urlExOne);
});

//exercise two
function exTwoCall(url){
    let promise = fetch(url);
    promise
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            console.log(response);
            printContinents(response, exerciseTwo)
        })
        .catch(function(error){
            console.log(error);
        });
};

function printContinents(data, element){
    element.innerHTML = "";
    for(let i = 0; i < data.length; i++){
        element.innerHTML += `
            <td>
            <tr>${data[i].name}</tr>
            </td>
        `
    }
    
};


btnTwo.addEventListener("click", function(){
    exTwoCall(urlExTwo)
});

//exercise three

function exThreeCall(url){
    let promise = fetch(url);
    promise 
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            console.log(response);
            printResultsOne(response, exerciseThree)
        })
        .catch(function(error){
            console.log(error);
        });
};

btnThree.addEventListener("click", function(){
    exThreeCall(urlExThree)
    
})