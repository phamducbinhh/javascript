// B4 Dùng vòng lặp for để sắp xếp array sau theo thứ tự tăng dần và giảm dần
var array = [1,9,3,7,6,4,5,2]

// for(var i=0; i<array.length;i++){
//   for(var j= i+1; j < array.length; j++){
//     if(array[i] > array[j]){
//       var z = array[i]
//       array[i] = array[j]
//       array[j] = z
//     }
//   }
// }

// for(var i = 0; i<array.length;i++){
//   for(var j= i+1; j < array.length; j++){
//     if(array[i] < array[j]){
//       var z = array[i]
//       array[i] = array[j]
//       array[j] = z
//     }
//   }
// }
// for(var i = 0; i<array.length - 1 ; i++){
//   if(array[i] < array[i+1]){
//     var z = array[i]
//     array[i] = array[i+1]
//     array[i+1] = z
//     i = 0
//   }
// }

// B5 Dùng vòng lặp for để tính tổng số lượng sản phẩm
var sanPham = [
  {
    ten: "áo somi",
    soLuong: 100,
  },
  {
    ten: "áo khoác",
    soLuong: 50,
  },
  {
    ten: "áo phông",
    soLuong: 200,
  },
];

var tong = 0

for(var i = 0; i<sanPham.length;i++){
  tong = tong + sanPham[i].soLuong
}
// console.log(tong);

// B6 
// 	viết function có đầu vào là 1 array chứa các số
// 	Function trả ra số lớn nhất trong array 


function timMin (array){
  var min = array[0]
  for(var i = 0; i < array.length; i++){
    if(min > array[i]){
      min = array[i]
    }
  }
  return min
}


function timMax (xx){
  var max = xx[0]
  for(var i = 0; i < xx.length; i++){
    if(max < xx[i]){
      max = xx[i]
    }
  }
  return max
}
var x = timMax([3,21,6,54,321,3,3,4])

// B7	viết function có đầu vào là 1 array
// 	Function trả ra array mới với thứ tự ngược lại với array ban đầu
var array = [1,9,3,7,6,4,5,2]
function nghichDao(arr){
  var newArr = []
  for(var i = arr.length - 1; i >=0; i--){
    newArr.push(arr[i])
  }
  return newArr
}

var test = nghichDao([3,2,13,54,68,546,54,2])

// B8 	viết function có đầu vào là số number và 1 array chứa số
// 	Functionn trả ra số lần number lặp lại trong array

function rep (num, arr){
  var count = 0
  for(var i = 0; i< arr.length;i++){
    if(num === arr[i]){
      count++
    }
  }
  return count
}

var x = rep(4, [2,2,2, 4,4,4,4])
// console.log(x);

// B9 tim so lan lap lai cuar tat ca phan tu trong array

var arr = [3,5,4,6,5,4,9,6,8,4,6,5,2,1,6,8,4,5,6,5,4] // [2 ,4]

// b1  taoj ra array không trùng

function repAll (arr){
  var newArr = arr.filter(function(val, index){
    return arr.indexOf(val) === index
  })
  var kq = []
  for(var i = 0; i< newArr.length; i++){
    var count = rep(newArr[i], arr)
    kq.push({value: newArr[i], count: count})
  }
  return kq
}

var test = repAll(['a','a',3,5,8,7,9,5,4,7,8])
console.log(test);