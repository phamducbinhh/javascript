// hàm Map khi muốn thay đổi element của 1 array thì phải trả về 1 array mới

const courses = [
  {
    id: 1,
    name: "Nodejs",
    price: "100000",
  },
  {
    id: 2,
    name: "Reactjs",
    price: "200000",
  },
  {
    id: 3,
    name: "Angularjs",
    price: "30",
  },
  {
    id: 4,
    name: "javascript",
    price: "50",
  },
  {
    id: 5,
    name: "typescript",
    price: "20",
  },
];

const newCourse = courses.map((course) => {
  return {
    ...course,
  };
});
console.log(newCourse);
console.log(courses);