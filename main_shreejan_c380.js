// defining car class
class Car {
  constructor(brand, model, year, color, price, gas) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.gas = gas;
  }

  honk() {
    console.log("Tuut tuut");
    console.log(this);
    console.log();
  }

  updateGas() {
    const currentYear = 2023;
    const gasSpent = 5 + (currentYear - this.year);
    this.gas = this.gas - gasSpent;
  }
}

// list cars
const cars = [
  new Car("Honda", "CR-V", 2023, "Red", 50000, 45),
  new Car("Ford", "F-150", 2020, "Black", 25000, 30),
  new Car("BMW", "X5", 2022, "Green", 60000, 65),
  new Car("Mazda", "CX-5", 2019, "White", 15000, 60),
  new Car("Audi", "Q7", 2018, "Silver", 52000, 47),
  new Car("Kia", "Forte", 2020, "Blue", 21000, 56),
];

// calling honk method
console.log("Calling honk method:")
cars.forEach(car => car.honk())

// race logic
for (let index = 0; index < 7; index++) {
  cars.forEach(car => car.updateGas())
}

// logging data after the race
console.log();
console.log("Calling after the race:");
cars.forEach(console.log)