// Exercise 3
//
// 1. Building on Exercise 2, implement the following methods:
//
// age() - returns the age of the car.
// setYear()
// getYear()
// setMake()
// getMake()
// setModel()
// getModel()
// setColor()
// getColor()
// Include validity checking for setYear().

// 2. Modify the constructor you have written so that the mileage is
//    passed in as a parameter and recorded as an attribute.

// 3.  Add accessors for the new mileage.  For validity, ensure that the
//     mileage for a car can never be decreased.
//4. The database backing our list of cars only recognizes seven colors, plus none. Make sure that when a car color is set, that it is in the list: red, orange, black, green, blue, silver, and white. "none" is also allowed and should be the default.
//Make sure you modify your constructor and your acessors.

var acceptableColor = ['red', 'orange', 'black', 'green', 'blue', 'silver', 'white'];

var Car = function(year, make, model, color, mileage){
  this.year = year;
  this.make = make;
  this.model = model;
  this.color = "none";
  this.mileage = mileage;
  if (acceptableColor.indexOf(color) !== -1) {
    this.color = color;
  }
};



var classicCar = new Car (1957, 'Ford', 'Mustang', 'red', 1000);
var modernCar = new Car (2007, 'VW', 'Jetta', 'black', 52);

/*-Can- do this to modify the object:
newCar.year=2007;
But shouldn't.
*/

/*accessor functions for year - in this example, to limit the object:

classicCar.setYear = function(newYear){
  if newYear > 2015 {
    console.log("we are not yet building cars in the future")
  }
  else {
    this.year = newYear;
  }
}

classicCar.setYear(2097);
should log 'we are not yet building cars in the future'
*/

Car.prototype.setYear = function(newYear){
  if (newYear > 2015) {
    console.log("we are not yet building cars in the future")
  }
  else {
    this.year = newYear;
  }
}
Car.prototype.getYear = function() {
  return this.year;
}

console.log(classicCar.getYear());
classicCar.setYear(2097);
console.log(classicCar.getYear());
classicCar.setYear(2007);
console.log(classicCar);
//classicCar.setYear(1967);
//console.log(classicCar);
//
Car.prototype.setMake = function(newMake){
    this.make = newMake;
}
Car.prototype.getMake = function() {
  return this.make;
}
// console.log(classicCar.getMake());
// classicCar.setMake('Toyota');
// console.log(classicCar);

Car.prototype.setModel = function(newModel){
    this.model = newModel;
}
Car.prototype.getModel = function() {
  return this.model;
}

// console.log(classicCar.getModel());
// classicCar.setModel('Corola');
// console.log(classicCar);

Car.prototype.setColor = function(newColor){
    //if (newColor === 'red')
    //if (newColor === 'orange') etc - working but long method.
    if(acceptableColor.indexOf(newColor) === -1) {
      console.log("Not a recognized color")
    }
    else{this.color = newColor;}
}
Car.prototype.getColor = function() {
  return this.color;
}

console.log(classicCar.getColor());
classicCar.setColor('ultraviolet');
console.log(classicCar.getColor());
classicCar.setColor('blue');
console.log(classicCar);

Car.prototype.getMileage = function() {
  return this.mileage;
}

Car.prototype.setMileage = function(newMileage){
    if (newMileage<this.mileage) {
      console.log("Nice try, used car salesman!")
    }
    else{this.mileage = newMileage;}
}


console.log(classicCar.getMileage());
classicCar.setMileage(500);
console.log(classicCar.getMileage());
classicCar.setMileage(6000);
console.log(classicCar);

