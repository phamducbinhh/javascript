// Recursion and stack

function countDown(number) {
  console.log(number);
  let other = number - 1;
  if (other > 0) {
    countDown(other);
  }
  //điều kiện dừng lại
}
countDown(3);

// đưa hết về 1 mảng
const complexArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function flatArray(arr, deep) {
  if (deep === undefined) {
    deep = 1;
  }
  if (deep === 0) {
    return arr;
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatArray(arr[i], deep - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(flatArray(complexArr, 1));

//đệ quy
function sayHello(count) {
  if (count <= 0) {
    return;
  }

  console.log("Đệ quy!");
  sayHello(count - 1);
}
sayHello(5);

//vòng for
function sayHi(n) {
  for (i = 0; i < n; i++) {
    console.log("vòng lặp for");
  }
}
sayHi(5);
