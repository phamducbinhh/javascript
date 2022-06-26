//cách thông thường
let gia = {
  name: "java",
  coin: 0,
};
// if(gia.coin > 0){
//     console.log('gia',gia.coin);
// }else{
//     console.log("free");
// }

//TOÁN TỬ 3 NGÔI:ternary operator //biểu thức điều kiện

let result = gia.coin > 0 ? `${gia.coin} coins` : "free";
console.log(result);