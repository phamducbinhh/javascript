// bài 2: cho arr [1,8,5,2,7,6,9,2,6]
// a, Hãy lấy ra số lơn nhất trong array
// b, Hãy lấy ra số chẵn nhỏ nhất trong array
// c, dùng .sort để sắp xếp mảng tăng dần và giảm dần

let arr = [1, 8, 5, 2, 7, 6, 9, 2, 6];
//dùng math lấy ra số lớn nhất
let arrmax = Math.max(...arr);
let arrMin = Math.min(...arr);
console.log(arrMin);
console.log(arrmax);

//dùng reduce tìm số chẵn nhỏ nhất
let arrC = arr.filter(function(value){
    if(value % 2 === 0){
        return true;
    }
})
let arrCm = arrC.reduce(function(x,y){
    return (x<y) ? x:y ;  // dòng này nghĩa là if(x<y) => return x và else return y
})
console.log('số chẵn của mảng '+ arrC);
console.log('số chẵn nhỏ nhất là: '+ arrCm);


