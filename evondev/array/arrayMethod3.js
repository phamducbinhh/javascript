//MAP: Duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu

let number = [1, 2, 3, 4, 5];
//trả ra một mảng mới mà các số (giá trị)trong mảng cũ nhân 2
//cú pháp .map(callback(value,index,array))

//tạo 1 callback (function)
let number2 = number.map(function (value, index) {
  return value * 2; //nhân 2
});
console.log("number", number2);

//dùng arrow Function
let number3 = number.map((item) => item * 2);
console.log("number3:", number3);

// ====================================

//forEach
//cú pháp .forEach(callback(value,index,array))
let number4 = number.forEach((value,index,array)=>{
    return value*3
})
//filter sàng lọc các phần tử trong mảng
//cú pháp .filter(callback(value,index,array))
let numberTwo = [1, 2, 3, 4, 5];

//đề lọc ra các số lẻ
let numMax3 = numberTwo.filter((value)=>value%2==1);
console.log("numMax3",numMax3);//4,5

//some và every

//some trả về true khi thỏa 1 điều kiệ và ngược lại trả về false khi không thỏa điều kiện nào cả

let someNumer = number.some((value)=> value > 3);
console.log("somenumber",someNumer);

//every chỉ trả về true khi tất cả các điều kiện đều đúng ngược lại 1 cái sai thì sẽ return false

let everyNumber = number.every((value)=> value>0)
console.log("every",everyNumber);

//reduce============================
//gom các phần tử trong mảng lại thành 1
//.reduce((a,b)=> {}, initialize value(giá trị khởi tạo ban đầu));

let tong = number.reduce(function(a,b){
    return a+b;
},0) //giá trị khởi tạo tổng = 0
console.log("tong",tong);//15
