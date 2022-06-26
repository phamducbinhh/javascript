//vòng lặp
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(`the index is ${arr[i]}`);
}
/**
 * length:5
 * i=0;
 * i<5 ->true
 * i++ ->1
 * result : 0
 *
 * i=1;
 * 1<5 ->true
 * i++ ->2
 * result : 1
 * tiếp tục
 */

//sử dung break ,continue
for (let i = 0; i < arr.length; i++) {
  //ví dụ lấy giá trị là 3 thì dừng vòng lặp
  //  if(arr[i] === 3){
  //      break;
  //  }

  // console.log(`the index two ${arr[i]}`);
  if (arr[i] === 3) {
    continue; // bỏ qua giá trị 3 và vẫn chạy tiếp
  }

  console.log(`the index continue ${arr[i]}`);
}

//cách lấy giá trị ngược  lại trong mảng
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]); //kết quả [5,4,3,2,1]
  for (let j = arr.length - 1; j >= 0; j--) {
    console.log(j);
  }
}
//let i = arr.length-1 -> lấy vị trí cuối cùng của mảng (chạy trừ phải qua trái)
//i>=0 -> điều kiện index lớn hơn hoặc bằng 0
//i-- -> i =i-1

//ví dụ bài tập
//1 sao chép mảnh dùng vòng lặp for
let copyArr = [];
for (let i = 0; i < arr.length; i++) {
  copyArr.push(arr[i]);
}
console.log("mảng copy là:", copyArr);
//2.đảo ngược từ "i love" -> "evol i"
let string = "i love";
let newsTR = "";
for (let i = string.length - 1; i >= 0; i--) {
  newsTR += string[i];
}
console.log(newsTR);

//VÒNG LẶP DO WHILE
//while and do while
//while(condition:điều kiện){
//body code
//}

//* vòng lại while check điều kiện xong mới xử lý
let number = 1;
while (number < 10) {
  // console.log("number is",number);
  //điều kiện để dừng
  number++;
  //number +=1;
  //number++
}

//* do while xử lý xong mới check điều kiện
let number2 = 1;
do {
  console.log("number2 is", number2);
  number2++;
} while (number2 < 8);

//for of
//for( variables of arrray){}
let a = [];
for (let value of arr) {
  value += 10;
  a.push(value);
}
console.log(value);
