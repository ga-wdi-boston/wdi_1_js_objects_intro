// Exercise 2
//
// Using Example 2 as a model, create a constructor for a Car class.
// The important attributes of a car are year, make, model, and color.



// When you are done, the following code should create an appropriate object:

var Car = function(year, make, model, color){
  this.year = year;
  this.make = make;
  this.model = model;
  this.color = color;
};

var classicCar = new Car (1957, 'Ford', 'Mustang', 'red');
var modernCar = new Car (2007, 'VW', 'Jetta', 'black');

console.log(classicCar);


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

classicCar.setYear(2097);
classicCar.setYear(2007);
console.log(classicCar);
//modernCar.setYear(2097);
//modernCar.setYear(2007);
//console.log(modernCar);

//Now, with a new variable, we can set the year later!
var parentCar = new Car (2001, 'Dodge', 'Caravan', 'rust');
console.log(parentCar);

parentCar.setYear(2003);
console.log(parentCar);

//
Car.prototype.getYear = function() {
  return this.year;
}

console.log(classicCar.getYear());
classicCar.setYear(1967);
console.log(classicCar);

