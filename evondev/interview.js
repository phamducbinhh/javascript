// //convert object to array

//cách 1
// const newOject = {
//   shrimp: 15,
//   crab: 30,
// };
// const newArray = Object.entries(newOject);
// // console.log(newArray);

// //cách 2

// const object2 = {
//   a: 1,
//   b: 2,
// };

// const array2 = [];
// // console.log(Object.keys(object2));
// // for (let key in object2) {
// //   array2.push([key, object2[key]]);
// //   //   console.log(key);  //key là a và b
// // }
// // console.log(array2);
// for (let key of Object.keys(object2)) {
//   array2.push([key, object2[key]]);
// }
// console.log(array2);

// //the second largest number in an array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function maxSeconds(arr) {
//   const max_two = arr.sort((a, b) => b - a)[1];
//   return max_two;
// }

// // console.log(`The second largest number in array is : ${maxSeconds(arr)}`);

// //cách 2

// const secondMax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function secondMax2(arr) {
//   const max = Math.max(...arr);
//   const maxIndex = arr.indexOf(max);
//   arr.splice(maxIndex, 1);
//   const max2 = Math.max(...arr);
//   return max2;
// }
// // console.log(`The second largest number in array is : ${secondMax2(secondMax)}`);

// // cách 3

// const array = [32, 523, 5632, 920, 6000];

// let arrMax = Math.max(...array);
// let arrSecondsMax = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] !== arrMax && array[i] > arrSecondsMax) {
//     arrSecondsMax = array[i];
//   }
// }
// // console.log("Second Largest Number in the array is " + arrSecondsMax);

// //Create a function that takes a number as an argument

// function addUp(num) {
//   if (num < 0 || typeof num !== "number") {
//     throw new Error("Invalid input");
//   } else {
//     let sum = 0;
//     //biến tổng là 0
//     for (let i = 0; i <= num; i++) {
//       sum += i;
//     }
//     return sum;
//   }
// }
// console.log(addUp(4));

//cách 2

// const object = {
//   a: 1,
//   b: 2,
// };

//
