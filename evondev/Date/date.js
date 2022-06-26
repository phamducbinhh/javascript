const now = new Date();
//build-in object

console.log(now); // 2022-05-04T08:31:25.164Z

// Timestamp và epochtime

//timestamp tính ra kết quả là milisecond
console.log(now.getTime());
// epochtime tính ra kết quả 1/1/1970
console.log(new Date(0));

//các cách khởi tạo date objec
/**
 * new Date() -> in ra ngày giờ hiện tại
 * new Date(timestamp) -> dựa vào timestamp để in ra ngày giờ
 * new Date(date string)->
 * new Date(year,month,day,hours,minutes,seconds,miliseconds)
 */
console.log(new Date(1651653360985));
console.log(new Date(2021, 5, 1, 23, 23, 23, 23));

/**
 * các hàm get trong date
 */
const birthday = new Date(2000, 1, 17);
//in ra năm
console.log(birthday.getUTCFullYear()); //2000
// in ra tháng
//UTC
//*get month( chạy từ 0-11)
console.log(birthday.getMonth()); //1
//in ra ngày của tháng
console.log(birthday.getDate());
//in ra thứ của tuần 0-6 0 là chủ nhật 6 là thứ 2
console.log(birthday.getDay()); //thứ 4
//in ra giờ
console.log(birthday.getHours());
//in ra phut
console.log(birthday.getMinutes());
//in ra giay
console.log(birthday.getSeconds());
//in ra timestamp
console.log(birthday.getTime());

//các hàm set trong date
console.log(`birthday: ${birthday}`);
birthday.setFullYear(1998);
birthday.setMonth(10); //thang 11
birthday.setDate(30); //ngay 30
birthday.setHours(12); //12 gio
birthday.setMinutes(15); //15 phut
console.log(`birthday after update: ${birthday}`);

//==================== các hàm khác  trong date
console.log(now.toDateString()); //Wed May 04 2022
console.log(now.toTimeString()); //16:26:52
console.log(now.toLocaleDateString()); //5/4/2022  //m//dd/yyyy
console.log(now.toLocaleDateString("vi-VI")); //4/5/2022

//cách để in ra 04/05/2022
//input Wed May 04 2022 16:35:20 GMT+0700 (Giờ Đông Dương)
const myTime = new Date("Wed May 04 2022 16:35:20 GMT+0700 (Giờ Đông Dương)"); //04/05/2022
const myYear = myTime.getFullYear();
const myMonth = myTime.getMonth() + 1; //thang 4
const myDate = myTime.getDate();
const prefix = myMonth < 10 ? "0" : ""; //tạo ra 04/05.2022
console.log(`${prefix}${myDate}/${prefix}${myMonth}/${myYear}`);

//Tìm hiểu setTimeout và setInterval

setTimeout(function () {
  console.log("call me after 3 second"); //sau 3 giây in ra màn hình
}, 3000);

const timer = setInterval(function () {
  console.log("call me");
}, 1000);

clearInterval(timer);
