//nhập 1 số nguyên từ 1 đến 7 in ra thứ trong tuần
//1 => ỉn ra chủ nhật
//2 => ỉn ra thứ 2



// num = parseInt(prompt('nhap 1 so'));
// switch(num){
//     case 1:
//         console.log("chu nhat");
//         break;
//     case 2:
//         console.log("thu 2");
//         break;
//     case 3:
//         console.log("thu 3");
//         break;
//     case 4:
//         console.log("thu 4");
//         break;
//     case 5:
//         console.log("thu 5");
//         break;
//     case 6:
//         console.log("thu 6");
//         break;
//     case 7:
//         console.log("thu 7");
//         break;
//     default:
//         console.log("ban nhap sai roi,nhap tu 1..7 thoi");
// }





//bai tap
/*nhap vào tháng năm và in ra so ngay trong thang nam do;
 vd:
   tháng = 4
   năm = 2022
   => tháng 4 năm 2022 sẽ có 30 ngày
*/

var num = 2;
switch(num){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log('co 31 ngay');
    break;
  case 2:
    console.log('co 28 ngay');
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log('co 30 ngay');
    break
  default:
    console.log("nhap sai thang");
}

