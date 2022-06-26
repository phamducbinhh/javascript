//btap1.cho 1 mảng bao gồm nhiều giá trị [1,100,false,null, "evondev","",undefined,"javascript".[1,2,3].viết chương trình loại bỏ các giá trị là falsy ra khỏi mảng chỉ giữ lại giá tri truthy.gợi ý giá trị falsy là 0 null undefined false "" NaN
const array = [
  1,
  100,
  false,
  null,
  "evondev",
  "",
  undefined,
  "javascript",
  [1, 2, 3],
  NaN,
];

const filterFalsy = array.filter(function (item) {
  return Boolean(item);
});
// console.log(Boolean("")); //tim ra cac gia tri true false
// console.log("các giá trị truthy là", filterFalsy);
//btap2.CHO 1 mảng phức tạp là [[1,2,3,[false,null]],[1,5,6,["javascript"]],[888,666,[90]]] lấy ra kết quả mong muốn [ 1, 2, 3, false, null, 1, 5, 6, 'javascript', 888, 666, 90 ]
const complex = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90]],
];
//dùng phương thức flat(number) làm phẳng mảng
const result = complex.flat(Infinity);
// console.log(result);

//3.làm phẳng mảng [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const numberArr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const newNumberArr = numberArr.flat(Infinity);
// console.log("newNumberArr", newNumberArr);

//3.đảo ngược số nguyên. ví du 1234 -> 4321

//dùng math.sign(123) -> 1

//dùng math.sign(-123) -> -1
function reverseNumber(number) {
  // convert to string
  //split("") -> [value]
  //reverse()
  //join("")
  const value =
    parseInt(number.toString().split("").reverse(), join("")) *
    Math.sign(number);
  console.log(value);
}
// reverseNumber(-1234);

//bai tap4: viết chương trình có tên là fizzbuzz với đầu vào là 1 số nguyên và cho chạy từ 1 cho tới số nguyên đố rồi kiểm tra nếu có số chia hết cho 2 thì ỉn ra chữ "fizz", nếu chia hết cho 3 thì in ra chữ "buzz",nếu chia hết cho 2 và 3 thì im ra"fizzbuzz"

function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 2 === 0) {
      console.log("fizzbuzz");
    } else if (i % 2 === 0) {
      console.log("fizz");
    } else if (i % 3 === 0) {
      console.log("buzz");
    }
  }
}
// fizzbuzz(15);

//bai tap 5: cho 1 chuỗi bất kỳ , đếm số lượng ký tự "vowel" có trong 1 chuỗi.
//volwel là các ký tự u e i a i
//ví dụ "evondev" -3

function countVowels(string) {
  let count = 0;
  const character = "ueoai";
  for (let c of string) {
    if (character.includes(c)) count = count + 1;
  }
  return count;
}
// console.log(countVowels("evondev"));
//"evondev" -> e v o n d e v

//baì tập 6 : cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6] viết một function trả về một mảng với các giá trị unique.kết quả wor trên sẽ là [1,2,3,5,7,6] //xóa các phần tử trùng lặp

function unique(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(unique([1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6]));

//bài tập 7 : viết 1 hàm xử lý 1 mảng lớn thành nhiều mảng con dựa vào 1 số nguyên đầu vào.ví dụ ([1,2,3,4,5],2)->[[1,2],[3,4],[5]]

function splitArray(array, number) {
  let kq = [];
  //slice(start, end)
  //[1,2,3,4,5,6]
  let index = 0;
  while (index < array.length) {
    kq.push((array.slice(index,number+index)));
    index = index + number;
  }
  return kq
}
console.log();