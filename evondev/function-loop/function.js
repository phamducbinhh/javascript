//function (hàm)

//khai báo function()

/**  cú pháp (syntax): function namEmt (paremeter,paremeter){
    your code ......
}
paremeter: tham số
*/
// 1. Return
//     - trả về kết quả của hàm
//     - có thể trả về bằng tất cả các kiểu dữ liệu
//     - các dòng code khi viết dưới return sẽ không hoạt động
//     - khi không có return hàm sẽ trả về undefined
function nhan(a, b) {
  return a / b;
}
var result = nhan(4, 5);
console.log(result);

//ví dụ viết hàm tính tổng a và b
function sum(a = 0, b = 0) {
  const tong = a + b;
  return tong;
  //return trả về tổng sum
  // không return => undefined
}
//function sum(paremeter = defaultValue)
//sum() :invoke
console.log("tổng là:", sum(2, 2));

//invoke funtion sum(argument) đối số
//Tham số là function
//lưu function vào một biến rồi gọi sau này

function add(a = 0, b = 0) {
  return a + b;
}
//add(500,1000);

const sum2 = add; //gán function add cho sum2 nhung chưa được gọi
// tính trung bình của a và b => (a+b)/2
//fn:function
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
let result = average(200, 300, sum2);
console.log(result);
//function declaration
//anonymous function(function expression)
//không bị hoisting
const logName = function () {
  console.log("your name");
};
logName();

//IIFE -> immediately invoked function excution

(function () {
  console.log("my name is binh");
})();

//scope
//global scope, function scope
let myName = "evondev"; //đây là global  scope  toàn cục
function logYourName() {
  let myName2 = "Bình"; //đây là Function scope
  console.log(myName2);
}
logYourName();
console.log("myName :", myName);

//block scope chỉ được truy cập khai báo trong khối block ,cho ra ngoài sẽ lỗi
var message2 = "hello Pham"; //không nên dùng var vì cho ra ngoài hay vào trong thì vẫn sử dụng được
if (2 > 1) {
  // let message = "hello evondev";
  const message = "hello evondev";
  //global scope
  //hoisted
}
console.log(message2);

//lexical scope
let aNewName = "Evondev"; //global scope
function sayHello() {
  let mess = "hi"; //block scope

  console.log(`${mess} ${aNewName}`);
}
sayHello();

//clousure
// function con có thể truy xuất scope của function cha
function sayHello2() {
  //parent
  let messagea = "hi";
  //inner function
  function sayHi() {
    //child
    console.log(messagea);
  }
  return sayHi;
}
let hello = sayHello2();
hello();

function sayHello3(warning) {
  return function hiYourName(name) {
    console.log(`${warning} ${name}`);
  };
}

let hi = sayHello3("welcome to js");
hi("clousure");
//welcome to js clousure
function anotherFunction() {
  let otherMessage = "hiiii";
  function sayHi() {
    console.log(otherMessage);
  }
  return sayHi;
}
let callFunc = anotherFunction();
