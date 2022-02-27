class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
};

class Student extends Person{
    constructor(firstName, lastName, age, academyName, studentId){
        super(firstName, lastName, age)
        this.academyName = academyName;
        this.studentId = studentId;
    }
    study(){
        console.log(`The student ${this.firstName} is studying in the ${this.academyName}`)
    }
    returnAcademy(student){
        return student.academyName
    }
}

let studentOne = new Student("StudentName", "StudentLastName", "StudentAge", "AcademyName", 1);
let studentTwo = new Student("StudentName", "StudentLastName", "StudentAge", "AcademyName", 1);


class DesignStudent extends Student{
    constructor(firstName, lastName, age, studentId, isStudentOfTheMonth){
        super(firstName, lastName, age, "Design academy", studentId)
        this.isStudentOfTheMonth = isStudentOfTheMonth;
    }
    attendAdobeExam(){
        console.log(`the student ${this.firstName} is attendeing adobe exam`)
    }
};
class CodeStudent extends Student{
    constructor(firstName, lastName, age, studentId){
        super(firstName, lastName, age, "Code Academy", studentId)
        this.hasIndividualProject = false;
        this.hasGroupProject = false;
    }
    doProject(string){
        if(string === "individual"){
            this.hasIndividualProject = true
        }
        if(string === "group"){
            this.hasGroupProject = true
        }
    }
}

class NetworkStudent extends Student{
    constructor(firstName, lastName, age, studentId, academyPart){
        super(firstName, lastName, age, "Network Academy", studentId)
        this.academyPart = academyPart;
    }
    attendCiscoExam(){
        console.log(`student ${this.firstName} is doing cisco exam`)
    }
}
let designStudentOne = new DesignStudent("studentName", "StudentLastName,", "StudentAge", 3, true)
console.log(designStudentOne)