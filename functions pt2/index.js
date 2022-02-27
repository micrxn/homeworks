let studentsUrl = 
"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

function callStudentsJson(url){
    let promise = fetch(url)
    promise
        .then((response) => response.json())
        .then((response) => {
                console.log(response);
                
                findGrades(response);
                femalesHigherGrade(response);
                malesFromSkopje(response);
                femaleOver24(response);
                malesStartingWithB(response);
            })
        .catch((error) => console.log(error))
};

function findGrades(data){
    let studentsWithHigherGrades = [];
    data.forEach(element => {
        if(element.averageGrade > 3){
            studentsWithHigherGrades.push(element.firstName)
        }
    });
    console.log(studentsWithHigherGrades)
};

function femalesHigherGrade(data){
    let femalesGrade5 = [];
    data.forEach(element => {
        if(element.averageGrade === 5 && element.gender === "Female"){
            femalesGrade5.push(element.firstName);
        }
    });
    console.log(femalesGrade5);
};

function malesFromSkopje(data){
    let fromSkopje = [];
    data.forEach(element => {
        if(element.city === "Skopje" && element.gender === "Male" && element.age > 18){
            fromSkopje.push(element.firstName);
        };
    });
    console.log(fromSkopje)
};

function femaleOver24(data){
    let averageGrades = [];
    data.forEach(element => {
        if(element.gender === "Female" && element.age > 24){
            averageGrades.push( `${element.firstName} ` + element.averageGrade ) 
        };
    });
    console.log(averageGrades)
};

function malesStartingWithB(data){
    let malesStartingWithB = [];
    data.filter(element => {
        if(element.gender === "Male" && element.firstName[0] === "B" && element.averageGrade > 2){
            malesStartingWithB.push(element.firstName)
        };
    })
    console.log(malesStartingWithB)
}
callStudentsJson(studentsUrl)
