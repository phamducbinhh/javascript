//implement Map
Array.prototype.myMap = function (fn) {
  for (let i = 0; i < this.length; i++) {
    this[i] = fn(this[i]);
  }
  return this;
};

let arr = [1, 2, 3, 4, 5, 6];
const arr2 = arr.myMap((item) => {
  return item * 5;
});

console.log("arr tăng lên 2 lần", arr2);
