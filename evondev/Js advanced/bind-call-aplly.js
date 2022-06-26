//1 bind

const student = {
  firstName: "Nguyen",
  lastName: "Van A",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(student.fullName.bind(student));

// ví dụ partical function tạo fucntion mới từ function cũ

function log(level, time, message) {
  console.log(`${level} ${time} ${message}`);
}

// function loggErrorToday(message) {
//   log("ERROR", "Today", message);
// }

const logErrToday = log.bind(null, "ERROR", "Today");

logErrToday("Server OK");

// call and apply

const person = {
  firstName: "pham",
  lastName: "duc binh",
};

function sayHello(str1, st2) {
  console.log(`${str1} ${st2} ${this.firstName} ${this.lastName}`);
}

// function.call(this, arg1, arg2, ...)
sayHello.call(person, "Hello", "World");
// function.apply(this, arg1, arg2, ...)
sayHello.apply(person, ["Hello", "goodbye"]);

// gộp mảng
const arr = [1, 2, 3, 4, 5];

const arr2 = [6, 7, 8, 9, 10];

arr.push.apply(arr, arr2);
console.log(arr);
