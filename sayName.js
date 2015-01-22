//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  var Person = function(name, age) {
  	//var obj = {};
  	this.name = name; // the keyword this is an object thats created for you , delegates to the constructors prototype on failed look ups.
returns’ this’ for you 
  	//return obj;
  }

//Now create three instances of Person with data you make up

  var person1 = new Person('Tim', 27);
  var person2 = new Person('Natalie', 24);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  Person.prototype.sayName = function() {
  	alert(this.name) // the keyword ‘this’ referers to whatever is to the left of the dot at invocation time.

  }
  person1.sayName();
