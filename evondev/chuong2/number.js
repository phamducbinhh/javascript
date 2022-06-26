// số nguyên : 1,2,3,99,2,3,4

// số thập phân : 3,4  . 5,8 v..vvv

console.log("5" + 7);
console.log(typeof 10);

const number1 = "5";
const number2 = "4.8";

console.log(parseInt(number1)); // in ra số nguyên

console.log(parseFloat(number2));
const number3 = -10;
//Math.abs(value)
console.log(Math.abs(number3));

//Math.floor(value) => làm tròn số từ 3.4 xuống 3
console.log(Math.floor(3.4));

//Math.cell(value) => làm tròn lên từ 4.5 lên 5
console.log(Math.ceil(4.3));

//Math.round(value) => làm tròn gần nhất ví dụ 4.8 -> 5 hoặc dưới 4.5 là còn 4
console.log(Math.round(4.6));
//toFixed(number) ví dụ 0.33333 -> 0.3
console.log((1 / 3).toFixed(2));
//Math.random
console.log(Math.cell(Math.random(0.67)));
//Math .max lấy ra số lơn nhất
//Math .min lấy ra số nhỏ nhất

//isNaN(value) vs number.isNaN(value)
//NaN -> not a number

console.log(isNaN("this is string"));//true
console.log(isNaN("1")); //false (isNaN 1)
console.log(Number.isNaN(NaN)); //true