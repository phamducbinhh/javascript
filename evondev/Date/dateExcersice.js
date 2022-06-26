//1.viết chương trình nhập vào năm sinh và in ra số tuổi
// let myYear = 2000;
// let now = new Date();
// let year = now.getFullYear()
// let age = year-myYear;
// console.log("tuổi của bạn là: "+ age);

//cách 2 dùng funciton

function age(year) {
  const now = new Date();
  const currentYear = now.getFullYear(); // lấy ra năm hiện tại
  return currentYear - year; // năm hiện tại trừ đi năm nhập vào ra tuổ
}
// console.log('Tuổi hiện tại của bạn là:',age(1968));

//2 viết chương trình đếm ngược thời gian theo từng giây (countdown) dựa vào thời gian đầu vào.ví dụ thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo hết thời gian -trung bình

function countdown(minutes = 1) {
  let seconds = minutes * 60; //1800s
  let counter = 0;
  const timer = setInterval(function () {
    counter += 1;
    console.log(counter); // in ra  từ 1 đến 10
    if (counter === 10) {
      clearInterval(timer);
      console.log("your time is end!");
    }
    //counter = 0 sau 1 giây sẽ là 1 nên bằng chính nó cộng 1
  }, 1000);
}
// countdown(1);

//3 . viết chương trình có tên là timesince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại,ví dụ: bạn đang chát với 1 bạn A , sau đố A offline và sau đó vài phút thì hiển thị bạn A vừa online 3 phút trước, 3 ngày trước,2 tháng trước , 30 giây trước , 1 năm trước

function timesince(date) {
  //currentime -date
  const now = new Date();
  const yourDate = new Date(date);
  const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000); //lam tron xuong
  let timerr = seconds / 31536000;
  // console.log(timerr);
  if (timerr > 1) {
    console.log(Math.floor(timerr), " năm trước");
    return;
  }
  timerr = seconds / 2678400;
  if (timerr > 1) {
    console.log(Math.floor(timerr), "tháng trước");
    return;
  }
  timerr = seconds / 604800;
  if (timerr > 1) {
    console.log(Math.floor(timerr), "tuần trước");
    return;
  }
  timerr = seconds / 86400;
  if (timerr > 1) {
    console.log(Math.floor(timerr), "ngày trước");
    return;
  }
  timerr = seconds / 3600;
  if (timerr > 1) {
    console.log(Math.floor(timerr), "giờ trước");
    return;
  }
  timerr = seconds / 60;
  if (timerr > 1) {
    console.log(Math.floor(timerr), "phút trước");
    return;

  }
  timerr = seconds;
  if (timerr > 1) {
    console.log(Math.floor(timerr), "giây trước");
  }
  return;
}
timesince();
// 3 phút trước, 3 ngày trước,2 tháng trước , 30 giây trước , 1 năm trước
//1 năm = 365 * 24 * 60 *60 =31536000
//1 tháng = 31*24*60*60 =2678400
//1 tuần = 7*24*60*60 =604800
//1 ngày = 1*24*60*60 =86400
//1 giờ = 1*60*60 =3600
//1 phut = 1*60 =60

timesince("Wed May 04 2022 18:38:22 GMT+0700 (Giờ Đông Dương)");
