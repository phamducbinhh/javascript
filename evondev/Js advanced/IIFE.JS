const app = {
  cars: [],
  add(car) {
    this.cars.push(car);
  },
  edit(car, index) {
    this.cars[index] = car;
  },
  delete(index) {
    this.cars.splice(index, 1);
  },
};
