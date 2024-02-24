//Creating object
let student = {
    name: "Riya",
    age: 19,
    skill: ["craft", "drawing", "c", "c++", "java"]
}

//Original object and copy of object points to same data in heap but have different pointers in stack.
console.log(student.name);
let student1 = student;
student1.name = "Shaikh";
console.log("~~~~~", student.name);

console.log("\n");
//Comparing the original object with the Shadow Clone Jujutsu of object
console.log(student == student1);
console.log(student === student1);

var skill = ["MERN", { name: "Sourabh", age: 25 }]
console.log(skill);
//Creating Method
var car = {
    color: function (c) { //c is parameter
        const color = "Car's color is " + c;
        return color;
    }
}
let x = car['color']("Blue");// Blue is arguments
console.log(x);
console.log(car.color("Black"));

//Adding new property
car.brand = "Ford";
console.log("Car's brand name is ",car.brand);

//Adding new method
car.Model = function (ModelName) {
    console.log("Car's Model Name is ",ModelName);    
}
car.Model('Mustang');

var a = new Date();//creating instance of date
console.log(a);

//Using this keyword
var obj1 = {
    fname : "Riya",
    lname : "Shaikh",
    getFullName : function () {
        return this.fname + " " + this.lname;
    }
}

console.log(obj1.getFullName());

//calling global object
console.log(this);

console.log("\n");
// console.log(student['name']);
//for in loop
for (let x in student){
    console.log(student[x]);
}

// Creating Object using const keyword
// const objconst = {
//     name : "Jarvis"
// }

// objconst.Creater = "Tony Stark";
// console.log(objconst);
// objconst = [];

let objconst = {
    name : "Jarvis"
}

objconst.Creater = "Tony Stark";
console.log(objconst);
objconst = [1,2,3];
console.log(objconst);

console.log("\n");
//Nested Objects
let r1 = {
    stud : {
        name : "Riya",
        age : {
            myage : 19
        }
    }
}
console.log(r1);
console.log(r1.stud.name);