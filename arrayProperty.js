//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
String.prototype.reverseString = function(me) {
	   return me.split('').reverse().join('');//I failed multiple times because I had a space in between the quotes. If y
}
String.reverseString('tim');


String.prototype.reverse = function() {
	return this.split(" ").reverse().join(" ");
};
'tim'.reverse();