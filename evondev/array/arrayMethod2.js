//sort
// sắp xếp các phần tử trong mảng theo chuẩn unicode-16
const random = [1, 99, 20, 2, 3, 4, 6, 7];
console.log(random.sort()); //  1, 2, 20, 3, 4, 6, 7, 99
//sort(function(a,b))
//function(callback) là 1 prameter nằm trong 1 function khác

const random2 = random.sort(function (a, b) {
  if (a > b) {
    return 1; //sắp xếp theo tăng dần
  } else if (a < b) {
    return -1; //sắp xếp theo giảm dần
  }
});

//viết bằng arrow function và ternary operator
const random3 = random.sort((a, b) => (a > b ? 1 : -1));

console.log(random2); //  1, 2,  3,  4, 6, 7, 20, 99
console.log(random3); //  1, 2,  3,  4, 6, 7, 20, 99
// ================================================


//find là phương thức trả về phần tử tìm thấy đầu tiên trong mảng

const number = [1,2,11,30,15,4,5,6,7];
//tìm phần tử đầu tiên ở trong mảng >10
const myNumber = number.find((element,index)=> element >10 ); //sử dụng arrow function
console.log("myNumber",myNumber);

//==================================

//findindex nó sẽ trả về vị trí index tìm thấy đầu tiên trong mảng
const myNumber2 =number.findIndex((value)=> value > 4);
console.log("myNumber2",myNumber2);