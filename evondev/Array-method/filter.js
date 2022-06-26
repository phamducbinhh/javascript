///filter hàm lọc ra các phần tử thỏa mãn điều kiện trả về

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = array.filter((arr) => {
  return arr % 2 === 0;
});
// console.log(newArray);

const users = [
  {
    id: 1,
    name: "Tran Van A",
    age: 21,
    address: "HN",
  },
  {
    id: 2,
    name: "Tran Van B",
    age: 21,
    address: "TP HCM",
  },
  {
    id: 3,
    name: "Tran Van C",
    age: 23,
    address: "TP HCM",
  },
  {
    id: 4,
    name: "Tran Van D",
    age: 21,
    address: "Đà Nẵng",
  },
];

const newUser = users.filter((user) => {
  return user.age === 21 || user.address === "TP HCM";
});
console.log(newUser);
