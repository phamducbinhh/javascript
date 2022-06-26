//JSON javascript objec notation
/*
{
    "key":value,
    "key":value,
    "key":value,
    "key":value,
    "key":value,
}

*/
//JSON.stringify(value) -> convert giá trị sang value
//JSON.stringify([1,2,3]) -> "[1,2,3]"
//JSON.parse("[1,2,3") -> [1,2,3]
console.log(JSON.stringify([1,2,3]));
console.log(JSON.parse("[1,2,3]"));


//by referrences -> nói tới vùng bộ nhớ chws không biết vùng bộ nhớ nào
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); //false

const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str===arr2Str);//true