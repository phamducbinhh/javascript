// implement myForEach

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

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
    price: "300000",
  },
];

courses.myForEach((course) => {
    console.log(course.price);
})
