//1. Viết function(hàm) so sánh 2 số a, b tìm ra số lớn hơn
function number(a = 0, b = 0) {
  return Math.max(a, b);
}
console.log(`số lớn hơn là: ${number(10, 20)}`);
//2. in hoa chữ cái đầu trong chữ ví dụ: tuấn -> Tuấn ...
function name(string = "") {
  let capitalize = string.toLowerCase().charAt(0).toUpperCase();
  let upercase = string.toLowerCase().slice(1);
  return `${capitalize}${upercase}`;
}
console.log(name("NAM"));
// 3 . viết 1 hàm có sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare in ra kết quả của hàm đó

// Bài 2: Định nghĩa 1 function tính diện tích hình tròn gồm 1 đối số truyền sao là bán kính của hình tròn. Ví dụ
// function dienTich(r){
// 	//viết công thức tính hình tròn vào đây
// 	//r là bán kính đường tròn
// }
// Thực hiện : dienTich(5) để in ra kết quả

// Bài 3: Khai báo 1 function tính tổng 2 số, tham số đầu vào của function là 2 do người dùng nhập vào. Khi chạy function thì sẽ thực tính tổng 2 số vừa truyền vào.
// gợi ý:
// Khai báo function: function sum(a, b){}
// Khi chạy function: sum(2, 10)
// Tương tự xây dựng function tính hiệu 2 số, tích 2 số, thương 2 số

// Bài 4: cho 2 số number1 = 10, number2 = 20. Hãy tính tổng hai số number1 và number2 và sau đó kiểm tra xem tổng vừa tính có nhỏ hơn 20 hay không?

// Bài 5: In ra các số lẻ nhỏ hơn 100
// Bài 6: Viết 1 function kiểm tra số nhập vào có phải là số nguyên tố hay không?
// Bài 7: Viết 1 function tính diện tích hình tròn với tham số đầu vào là 1 bán kính hình tròn.
