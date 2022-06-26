// single threaded xử lý đơn luồng

function task(mess) {
  let number = 100000;
  while (number > 0) {
    number--;
  }
  //   console.log(mess);
}
// console.log("start");
// task("loading");
// console.log("end");

//main file

//callback

console.log("start");
//in ra start -> thoát khỏi call stack
setTimeout(() => {
  console.log("loading");
}, 1000);
//rời khỏi callstack và chạy qua web api -> callback queue
console.log("end"); //chạy xong và rời khỏi callstack -> khi callstack empty thì chạy xong-> rời khỏi callstack

//wep api: setinterval, settimeout, setimmediate ,fetch request,dom event
