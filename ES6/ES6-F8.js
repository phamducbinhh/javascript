//1 var / let ,const :socpe, hoisting
//2 let is block scoped and var is function scoped

//code block: {}

if (true) {
  let course = "ES6";
//   console.log(course);
}

//Template literals (Template string)
const name = "John";
const name2 = "php";
const description = `name: ${name} ${name2}`;

// console.log(description);

//arrow function

const logger = (message) => {
  console.log(message);
};
logger("hello");
//expression function
function logger1(a) {
  console.log(a);
}
// logger1("hello");


const studunt = {
    name: "John",
    getName: () => {
        return this.name;  //context
    }
}
// console.log(studunt.getName()); //undefined



//class 
//contructor function

// function study(name,price){
//     this.name = name;
//     this.price = price;
// }
// const phpStudy = new study("php",100);
// const JsphpStudy = new study("reactjs",200);

//class es6

class study {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}


//Default parameter values

function logger(log,isAlert){
    if(isAlert) return alert(log);
    console.log(log);
}

// logger("hello..");


//Destructuring

var array = [1,2,3];

// var a = array[0];

// var b = array[1];

// var c = array[2];

var [a,b,...rest] = array;
console.log(a);
console.log(rest);

//object

var course = {
    naMe: "ES6",
    price: 100,
}
var{naMe,price,price2   } = course;

console.log(price);



