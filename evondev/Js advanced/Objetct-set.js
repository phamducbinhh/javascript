//set

const mySet = new Set();

mySet.add(1);
mySet.add("abc");
console.log(mySet);

//example

const arr = [1, 2, 3, 3, 4, 4, 5, 6, 7, 7, 8, 9, 9, 10];

const mySet2 = new Set(arr);
// console.log(mySet2);

//set to array

const newArr = Array.from(mySet2);

//for of

for (const item of newArr) {
  console.log(item);
}
//conts newArr2 = [...mySet2];

//cách 2 loại bỏ giá trị trùng

let result = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (!result.includes(element)) {
    result.push(element);
  }
}
console.log(result);
