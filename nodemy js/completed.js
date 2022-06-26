
// bài 1:
// cho  array = [1,5,7,8,9,15] sử dụng map hoặc filter
var arr = [1,5,7,8,9,15,6,4,12];
// bài 1.2: // * in ra các số lẻ  trong mảng
// bài 1.3: // * in ra các số lớn hơn hoặc bằng 5 trong mảng
// bài 1.4:// *in ra các số chia hết cho 5 trong mảng
// bài 1.5:// Tìm các số >5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
// bài 1.6: dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng
// bài 1.7: .splice để xóa 1 phần tử trong mảng

//chẵn 
var newarr = arr.filter(function(value){
    if(value % 2 == 0){
        return true;
    }
})
console.log('số chẵn của mảng là '+ newarr);

//lẻ
var arr2 = arr.filter(function(value){
    if(value % 2 == 1){
        return true;
    }
})
console.log('số lẻ của mảng là '+ arr2);

//>=5
var arr3 = arr.filter(function(value){
    if(value >= 5){
        return true;
    }
})
console.log('số >= 5 của mảng là '+ arr3);

// chia hết 5

var arr4 = arr.filter(function(value){
    if(value % 5 ==0 ){
        return true;
    }
})
console.log('số / 5 của mảng là '+ arr4);

//các số lớn hơn 5
var arr5 = arr.map(function(num){
    if(num > 5){
        return num+1
    
    }
})
console.log('số lớn hơn 5 và tăng thêm 1 đơn vị là :'+arr5);

//copy bằng slice

var arrCop = arr.slice(3,)
console.log('phần tử copy :' + arrCop);

//xóa phần tử

var arrdel = arr.splice(1,6)
console.log('phần tử xóa :' + arrdel);

// * dùng vòng for tăng kết quả của các phần tử array lên 2 lần, kết quả sẽ là mảng sau [2,10,14,16,18,30]
var arr = [1, 5, 7, 8, 9, 15]

var arrPrev = arr; // khai báo biến mới để tăng phần tử lên 2 lần

for (let i = 0; i < arr.length; i++) {
    arr[i]*=2
}
console.log(arrPrev);


