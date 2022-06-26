//By value vs By referrences
//by value -> giá trị thực sự được lưu trong vùng bộ nhớ

const num1 = 1;
const num2 = 1;
console.log(num1 === num2); //true

//by referrences -> nói tới vùng bộ nhớ chws không biết vùng bộ nhớ nào
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); //false

//JSON javascript objec notation
//JSON.stringify
//JSON.parse

//2 cách sao chép mảng
const students = ["b","c","d","e"]

//sử dụng phương thức slice()
const sliceStudents = students.slice();
console.log(sliceStudents);

//spread operator [...array]
const spreadStudent = [...students];
console.log(spreadStudent);

//2 cách gộp mảng 
//ví dụ [1,2] [3,4] [5,6]
const array1 = [1,2];
const array2 = [3,4];
const array3 = [5,6];

//cách 1 concat
const mergeArr  = array1.concat(array2,array3);
console.log(mergeArr); //[ 1, 2, 3, 4, 5, 6 ]

//cách 2 spread operator
//[...array]

const mergeArr2 = [...array1,...array2,...array3];
console.log(mergeArr2); //[ 1, 2, 3, 4, 5, 6 ]

//============================

//destructuring array
const toys = ["ball","sword","cands","magic"]
const a = toys[0]
const b = toys[1]
const c = toys[2]
console.log(a,b,c);
//const [index] = toys;
const [x,y,z] = toys;
console.log(x,y,z);

//rest parameter ...
demo=((a,...rest)=>{
    console.log(a,rest);
})
demo(1,2,3,4,5)