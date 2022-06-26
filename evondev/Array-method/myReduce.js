//tự viết phương thức reduce2 giống phương thúc reduce gốc
Array.prototype.reduce2 = function (callback, result) {
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

// tính tổng
const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((total, number) => {
  return total + number;
});

console.log(result);

const arr = [
  ["name", "Sơn Đặng"],
  ["age", 18],
];

function arrToObj(arr) {
  return arr.reduce((obj, item) => {
    obj[item[0]] = item[1];
    return obj;
  }, {});
}

console.log(arrToObj(arr));