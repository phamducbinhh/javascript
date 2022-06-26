/**
 * 
Bài 1: cho array = [1,5,7,8,9,15,8]
1.8 Đếm số phần tử = 8 trong mảng;

 */
let arr = [1, 5, 7, 8, 9, 15, 8];
function count8(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item == 8) {
      count++;
    }
  }
  return count;
}
let result = count8(arr);
// console.log(result);

/**
 * Bài 2: cho var data = [3,2,4,1,8,7,1,10,1,2]

a, tính tổng các phần tử trong array
b, tính tích các phần từ trong array
c, tính tổng các số lẻ trong array
d, tính tích các số chẵn trong array
e, có mấy số 1 trong array, ở những vị trí nào
f, số 1 đầu tiền và số 1 cuối cùng ở vị trí nào trong array

 */
let data = [3, 2, 4, 1, 8, 7, 1, 10, 1, 2];
function testDate(dataNew) {
  let sum = 1;
  for (let i = 0; i < dataNew.length; i++) {
    const number = dataNew[i];
    if (number % 2 == 0) {
      sum *= number;
    }
  }
  return sum;
}
// let result2 = testDate(data);
// console.log(`tích các số chẵn là:${result2}`);

/**
 * Bài 4 let array = [1,9,3,7,6,4,5,2]
 a, Hãy lấy ra số lơn nhất trong array
 b, Hãy lấy ra số chẵn nhỏ nhất trong array
 */
let array1 = [1, 9, 3, 7, 6, 4, 5, 2];
let newArray = Math.max.apply(Math, array1);
// console.log(newArray);
//tìm số chẵn nhỏ nhất
let arrCmin = array1.filter(function (value) {
  return value % 2 === 0;
});
let arrCmin2 = Math.max(...arrCmin);
// console.log("số chẵn nhỏ nhất là:", arrCmin2);

// //Bài 5 Hãy tính tổng số lượng sản phẩm của các phần tử trong array
// // let sanPham = [
//   {
//     ten: "áo somi",
//     soLuong: 100,
//   },
//   {
//     ten: "áo khoác",
//     soLuong: 50,
//   },
//   {
//     ten: "áo phông",
//     soLuong: 200,
//   },
// ];

function hangHoa(soLuong) {
  let sum = 0;
  for (let i = 0; i < soLuong.length; i++) {
    let item = soLuong[i].soLuong;
    sum += item;
  }
  // console.log(sum);
}
// hangHoa(sanPham);

/**
 * Bài 6: cho data2 = [3,2,4,1,8,7]
a, hãy dùng while để sắp xếp array theo chiều tăng dần
b, hãy dùng while để sắp xếp array theo chiều giảm dần

 */
let data2 = [3, 2, 4, 1, 8, 7];
let newData2 = data2.sort(function (a, b) {
  // return a-b // tăng dần
  return b - a; //giảm dần
});
// console.log(newData2);

/**
 * Hãy viết function để xử lý data trên 
a, function trả về tên hàng hóa có danh số cao nhất trong shop
b, function trả về tên hàng hóa có danh số thấp nhất trong shop
c, function trả về tổng doanh thu của shop, biết doanh thu = doanh so * gia ban

 */
let sanPham = [
  {
    ten: "áo somi",
    gia: 100000,
    doanhSo: 100,
  },
  {
    ten: "áo khoác",
    gia: 400000,
    doanhSo: 50,
  },
  {
    ten: "áo phông",
    gia: 150000,
    doanhSo: 200,
  },
];

//a

function test(sanPham) {
  let newSp1 = sanPham.sort(function (a, b) {
    return b.doanhSo - a.doanhSo;
  });
  return newSp1[0];
}
// console.log("sản phẩm có doanh số cao nhất là:", test(sanPham));

//b
function kiemtraHanghoa(sanPham) {
  let newSp = sanPham.sort(function (a, b) {
    return a.doanhSo - b.doanhSo;
  });
  return newSp[0];
}
// console.log("sản phẩm có doanh số thấp nhất", kiemtraHanghoa(sanPham));

/**
 * * dùng vòng for tăng kết quả của các phần tử array lên 2 lần,
 *  kết quả sẽ là mảng sau [2,10,14,16,18,30]
 *
 */

let array = [2, 10, 14, 16, 18, 30];

let array2 = [];

for (let i = 0; i < array.length; i++) {
  const item = array[i];

  array2.push(item * 2);
}
// console.log(array2);

//==================================
/**
 * cho array persons 
[{
	name: ‘Trung’,
	class: ‘Nodemy01’,
	dateJoin: ‘05-02-2020’,
age: 20
}, {
	name: ‘Phong’,
class: ‘Nodemy01’,
dateJoin: ‘06-01-2020’,
age: 19
}, {
	name: ‘Nam’,
class: ‘Nodemy02’
dateJoin: ‘25-01-2020’,
age: 20
}]

3.1 dùng .sort  để sắp xếp mảng object có tuổi tăng dần
3.3 dùng .sort để sắp xếp mảng theo ngày tham gia của học viên
3.2 dùng .filter để tìm ra những học viện tham gia trước tháng 2
3.4 dùng .map để tạo mảng mới, viết hoa toàn bộ Tên học viện : (Trung => TRUNG) 
	gợi ý : dùng toUppercase để viết hoa

 */

let persons = [
  {
    name: "Trung",
    class: "Nodemy01",
    dateJoin: "05-02-2020",
    age: 21,
  },
  {
    name: "Phong",
    class: "Nodemy01",
    dateJoin: "06-01-2020",
    age: 19,
  },
  {
    name: "Nam",
    class: "Nodemy02",
    dateJoin: "25-01-2020",
    age: 20,
  },
];

let newPerson = persons.sort(function (a, b) {
  return a.age - b.age;
});
// console.log("newPerson",newPerson); //tuổi tăng dần

