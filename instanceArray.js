/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

 var userArr = [];


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

 var user1 = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
 userArr.push(user1)

 var user2 = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
 userArr.push(user2);

 var user3 = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');
 userArr.push(user3);


console.log('Tyler\'s information is ', user1);
//Console.log all of Tylers information

  
console.log('Lenny\'s information is ', user3);
//Now console.log all of Lennys information

 


//Now create another instance of User using your own information and then add that to your users array.
var me = new User('Tim', 'tim@gmail.com', 'abc123')
userArr.push(me);

console.log('All my users names are ' );

//Now loop through your users Array and console.log every users name. 

for (var i = 0; i < userArr.length; i++) {
  console.log(userArr[i].name) // you have to console.log in the arr because otherwise the i variable isnt defined outside of the loop.
};






