// B5 Dùng vòng lặp for để tính tổng số lượng sản phẩm
var sanPham = [
  {
    ten: "áo somi",
    soLuong: 100,
  },
  {
    ten: "áo khoác",
    soLuong: 50,
  },
  {
    ten: "áo phông",
    soLuong: 200,
  },
];

var tong = 0;
for (i = 0; i < sanPham.length; i++) {
  tong += sanPham[i].soLuong;
}
// console.log(tong);
// B6
// 	viết function có đầu vào là 1 array chứa các số
// 	Function trả ra số lớn nhất trong array
var arr = [1, 9, 3, 7, 6, 4, 5, 2];
function key(arr) {
  var max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      // giải thích nếu trong arr[i] có phần tử nào lớn hơn nó thì nó lấy luôn giá trị đó lmaf số lớn nhất
      max = arr[i];
    }
  }
  return max
}
console.log(key(arr));

// B7	viết function có đầu vào là 1 array
// 	Function trả ra array mới với thứ tự ngược lại với array ban đầu


// B8 	viết function có đầu vào là số number và 1 array chứa số
// 	Functionn trả ra số lần number lặp lại trong array
