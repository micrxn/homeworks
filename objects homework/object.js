function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

function Student(firstName, lastName, age, academyName, studentId){
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function(){
        console.log(`the student ${firstName} is studying in the academy ${academyName}`)
    };
    this.academy = function (student){
        return student.academyName
    }
};

let studentOne = new Student("studentOneFirstName", "studentOneLastName", 20, "studentOneAcademyName", 1);
let studentTwo = new Student("studentTwoFirstName", "studentTwoLastName", 19, "studentTwoAcademyName", 2);
console.log(studentOne, studentTwo);


//ex 2

function DesignStudent(isStudentOfTheMonth, firstName, lastName, age, studentId){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, "Design Academy", studentId))
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function(){
        console.log(`student ${firstName} is attending adobe exam`)
    };
};
function CodeStudent(firstName, lastName, age, studentId){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, "Code Academy", studentId))
    this.individualProject = false;
    this.groupProject = false;
    this.doProject = function(string){
        if(string === "individual"){
            this.individualProject = true;
        }
        if(string === "group"){
            this.individualProject = true;
        }
    }
};

function NetworkStudent(firstName, lastName, age, studentId, academyPart){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, "Network Academy", studentId))
    this.academyPart = academyPart
    this.attendCiscoExam = function(){
        console.log(`student ${this.firstName} is doing cisco exam`)
    }
};

let networkStudentOne = new NetworkStudent("Student Name", "Student last Name", 20, 10, 3);
console.log(networkStudentOne);
let designStudentOne = new DesignStudent(true, "Student Name", "Student last Name", 29, 11, 4);
console.log(designStudentOne);
let codeStudentOne = new CodeStudent("Student Name", "Student last Name", 20, 5);
console.log(codeStudentOne)