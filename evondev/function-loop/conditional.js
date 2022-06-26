/**
 if(condition){
     code heere;
 }
 */

 const isRich = true;
 const myMoney = 100;
 if(!isRich){  //!true la false
    //  console.log('tôi sẽ mua xe');
 }else if(myMoney > 1000){
    //  console.log('tôi sẽ cho ban vay');
 }else{
    //  console.log("tôi nghèo");
 }

/**
 promt,confirm,alert
 */
//  alert("hoc evondev javascript")
//  let name = prompt("nhap ten cua ban")
//  console.log(name);

// let isMoney = confirm("day co phai tien cua ban hay khong")
// console.log(isMoney);

// ===========================================
// /**
//  bài tập

//  bài tập 1: nhập vào số tuổi nếu số tuổi lớn hơn hoặc bằng 18 thì được vào xem phim và ngược lại thì không được vào
//  */

// //  const age = prompt("vui lòng nhập vào số tuổi của bạn","");
//  let message = ""
//  if(Number(age) >= 18){
//    message = "bạn đủ tuổi được vào"
//  }else{
//      message = " xin lỗi bạn không đủ tuổi"
//  }
//  alert(message)
 
 /**
 bài tập

 bài tập 2 : cho 2 số a và b tìm ra số lớn hơn
 */

 const a = 10 ;
 const b = 10;
 if(a>b){
    //  alert(`số lớn hơn là số ${a}`)
 }else if(a <b){
    // alert(`số lớn hơn là số ${b}`)
 }else{
    //  alert("không có số nào lớn hơn số nào")
 }

 // Ternary operator
 const yourAge = 10;
 let message ="bạn là thiếu niên";
 if(yourAge >= 18){
     message = "bạn là người trưởng thành"
 }else if(yourAge <= 10){
     message = "bạn là trẻ con"
 }
//  console.log(message);

 // condition ? true : false  // if else rút gọn
 let message2 = yourAge >= 18 ? "bạn là người lớn":"bạn là trẻ con";
 console.log(message2);
 let message3 = yourAge >= 18 
 ? "bạn là người lớn"
 :yourAge <=10
 ?"bạn là trẻ em"
 :"bạn là  thiếu niên"