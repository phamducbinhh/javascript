//BÀI TẬP VỀ VÒNG LẶP FOR
// Bài 1: cho array = [1,5,7,8,9,15,8]
arr = [1, 5, 7, 8, 9, 15, 8, 10, 12, 13, 17, 22, 35, 36];
// 1.1 in ra các số chẵn của mảng
// 1.2 in ra các số lẻ của mảng
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log("so chan la :" + arr[i]);
  } else {
    console.log("so le cua mang" + arr[i]);
  }
}
// 1.3 in ra các số lớn hơn hoặc bằng 5 của mảng
for (var i = 0; i < arr.length; i++) {
  if (arr[i] >= 5) {
    console.log("cac so lon hon hoac bang 5 la:" + arr[i]);
  }
}
// 1.4 Cộng tổng các số chia hết cho 5 của mảng
var tong = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 5 == 0) {
    console.log("cac so chia het cho 5 la:" + arr[i]);
    tong += arr[i];
  } else {
    console.log("cac so khong chia het cho 5 la:" + arr[i]);
  }
}
console.log("tong cac so chia het cho 5 la:" + tong);
// 1.5 Tìm ra tích 3 số đầu của mảng array
var tich = 1;
for (i = 0; i < 3; i++) {
  tich = tich * arr[i];
}
console.log("tich cua 3 so dau la:" + tich);
// 1.6 Tính tổng 3 phần tử cuối của mảng
var tong3pt = 0;
for (i = 11; i < arr.length; i++) {
  //hoặc for (i = arr.length -1 ;i > arr.length-11;i--)
  //i=11 là vì đếm lùi gái trị các phần tử trong arr từ 0 cho đến 3 phần tử cuối
  tong3pt += arr[i];
}
console.log("tong 3 phan tu cuoi la:" + tong3pt);
// 1.7 Tìm xem trong array có phần tử nào là số 5 không?
console.log("có phần tử nào là số 5 trong array:" + arr.includes(5));
//hoặc ta có thể dùng cách này:
for (i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    console.log("co phan tu nao la so 5 trong array khong:" + arr[i]);
  }
}
// 1.8 Đếm số phần tử = 8 trong mảng;
arr = [1, 5, 7, 8, 9, 15, 8, 10, 12, 13, 17, 22, 35, 36];
var newArr= 0;
for(i=0;i<arr.length;i++){
  if(arr[i]===8){
    newArr++
  }
}
console.log('số phần tử bằng 8 là : '+ newArr);
