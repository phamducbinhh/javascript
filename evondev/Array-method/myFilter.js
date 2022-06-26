//implement Filter method for Array

Array.prototype.myFilter = function (cb) {
  let data = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      data.push(this[i]);
    }
  }
  return data;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr2 = arr.myFilter((item) => {
  return item % 2 == 0;
});

console.log(arr2);
