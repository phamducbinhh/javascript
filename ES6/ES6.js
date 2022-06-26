/**
 * 1Khai báo biến bằng let, const
2 Template Literals
3 Enhanced Object Property
4 Extended Parameter Handling
5 Arrow Function
6 Destructuring Assignment
7 Class
8 Promise
 */

//1 Khai báo biến bằng let, const

// var firstName = "John"; //global variable

// function getName() {
//   var lastName = "nguyen";

//   return firstName + " " + lastName;
// }
// console.log(getName());

//ES6 : let,const
//block scoping {}

for (var i = 0; i < 10; i++) {
  // console.log(i);
}

//=================================
//Template Literals

//es5
var aName = "John";

var greeting = "Hello " + aName;

//es6

const age = 22;

// console.log(`nam nay toi ${age} tuoi`);

//=================================
//Enhanced Object Property
//ES5

function person(name, age) {
  return {
    name: name,
    age: age,
    // getName: function() {
    //     return this.name + " " + this.age;
    // }
  };
}

var student = {
  name: "david",
  age: 22,
};

var salary = "xala";
person[salary + "salary"] = 100000; //computed property keys
// console.log(person);

//ES6

function person2(name, age) {
  return {
    name,
    age,
    getName() {
      //method property
      return this.name + " " + this.age;
    },

    [`${name}salary`]: 100000, //computed property keys
  };
}
// console.log(person2("John", 22));
// console.log(person2("John", 22).getName());

//=================================
//Extended Parameter Handling
//default parameter values
//ES5

function getName(name, age) {
  return name + " " + age;
}
console.log(getName()); //undefined

//ES6
function getNameEs6(name = "John", age = 22, ...other) {
  //   console.log(name + " " + age);
  //   console.log("other", other);
}

getNameEs6("John", 22, "it", 2000);

//spread operator

const todos = ["buy bread", "go to gym"];

const more = ["eat", "sleep", ...todos];
// console.log(more);

const gymer = {
  name: "john",
  age: 22,
};

const newGymer = { ...gymer, name: "david" };

// console.log(newGymer);

//=================================
//Arrow Function
let sum3 = (a, b) => {
  return a + b;
};
// console.log(sum3(1, 2));

//cách 2
let num = (a, b) => a + b;
// console.log(num(1, 2));

//cách 3
let square = (a) => a * a;
// console.log(square(2));

//cách 4

let square2 = (a) => a * a;
// console.log(square2(2));

let doSomething = () => {
  //   console.log("do something");
};

let arr = [1, 2, 3, 4, 5];

let newArr = arr.map((value) => {
  return value * 2;
});
// console.log(newArr);

//=========================================================
//destructuring assignment
//ES6

// const todolist = ["di hoc", "di lam"];

// const [todo1, todo2] = todolist;

// console.log(todo1, todo2);

// const list = [11,22,99];

// const [a, b, c = 11] = list;
// console.log(a, b, c);

const getFullName = ({ name, age }) => {
  return `${name} ${age}`;
};

// console.log(getFullName({ name: "John", age: 22 }));

//=========================================================

//class

//ES5

// function car(name, year) {
//   this.name = name;
//   this.year = year;
//   console.log(this);
// }

// //kế thừa

// car.prototype.getJob = function () {
//   return "xe của tôi là " + this.name;
// };

// var newCar = new car("BMW", 2018);
// var car1 = Object.create(newCar("BMW", 2022));

// console.log(car1.getJob());

//ES6

class car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  getJob() {
    // console.log(`xe của tôi là ${this.job}`);
  }
}

class newCar extends car {
  constructor(name, year, color) {
    super(name, year);
    this.color = color;
  }
}

const newCar2 = new newCar("BMW", 2018, "red");
// console.log(newCar2);
// newCar2.getJob();

//=========================================================
//Promise
//ES5

// function getAllData(callback) {
//   console.log("get data");
//   setTimeout(() => {
//     const database = [{ name: "John" }, { name: "David" }];
//     callback(database);
//     console.log("get data done");
//   }, 2000);

//   console.log("end");
// }

// getAllData(function (data) {
//   console.log("data", data);
// });

//ES6

const getAllData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const database = [{ name: "John" }, { name: "David" }];
      resolve(database);
    }, 2000);
  });
};

getAllData.then((data) => {
  console.log("data", data);
});
