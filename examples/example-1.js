// Example 1

var Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};


//Constructor function or person
//NOT A CONSTRUCTOR
var person = createPerson('joe', 'donnelly', 34);

//THIS IS A CONSTRUCTOR
var person = new Person ('joe', 'donnelly', 34);
//The 'new' makes it a constructor (also use a capital letter.)

var thisBook = new Book ('Gone with the Wind', 'Margaret Mitchell');

//the variable called thisX is also created with the constructor X.


function (newTitle, newAuthor) {
  this.title = newTitle;
  this.author = newAuthor;
};

//This is different from the other this:
thisIndex is different from this.index!

//1. Constructor functions start with capital letters.
//2. Consturctor functions are named after the type of object they create
//3. Constructor functions have a "magic" variable _this_ which refers to the newly created object
//4. Constructor functions are called with _new_


var Animal = function(animalSpecies, animalName){
  this.species = animalSpecies;
  this.name = animalName;
};

var tiger = new Animal('Panthera tigris', 'Stripey');
