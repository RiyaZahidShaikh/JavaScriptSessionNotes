//String methods
var happy = "I am happy";
console.log("IndexOf :",happy.indexOf('h'));
console.log("Last Index:",happy.lastIndexOf());
console.log("Length:",happy.length);
console.log("CharAt:",happy.charAt(2));
console.log("TypeCasting: ",typeof(Number('123')));
console.log("Using padEnd method: ",happy.padEnd(13,"!"));
let letter = happy.at(2);
console.log("Using at() method: ",letter);
//original value is not changed
var str = "riya";
str = str.toUpperCase();
console.log(str);
console.log(str.toLowerCase());
console.log(str);
//deleting characters in string
let part = happy.slice(5, 10);
console.log("Using slice method: ",part);

console.log("\n");
var name = "Riya Shaikh";
console.log(`My name is ${name}`);