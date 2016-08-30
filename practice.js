//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
//It is in functions. It refers to another variable, almost always an object, determined by the context in which the function was called.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
//this looks for its reference by going through four steps:
/*
1. Explicit: this checks to see if the .call() .apply() or .bind() method has given it context.
2. Implicit: this refers to the object that the invoked function was called from. object.function(); would give this object as its context.
3. Default/Window: if this is given no explicit or implicit reference, then it refers to the window/browser.
4. keyword New: when using New to create a new object from a contructor function,
this refers to the new object once created, and to the new empty object, named this,
the New keyword implicitly creates in a constructor function.
*/

  // 3) What is the difference between call and apply?

      //Answer
//Both functions pass context to the this keyword in the function they're called on.
//Call takes arguments in argument slots 2+ to take in to the invoked funciton.
//Apply takes only two arguments, and the 2nd must be an array containing all the arguments to pass in to the invoked function.

  // 4) What does .bind do?

      //Answer
//While call and apply don't return anything relevant (undefined), they invoke their function immediately.
//Bind produces a value to be invoked as a function LATER. It is used to pass a function definition to a variable, that
//has a context for the this keyword bound with it.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: "Jay Joey Jackrabbit Jeriah Jr"
  , email: "dontTrustTheIlluminatisSecondCousinBerniceLLC@domain.xxx"
  , getUsername: function() {
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
console.log(user.getUsername());

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function Car ( make, model, year ) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function () {
      return this.move += 10;
  }
}
var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object
// that is being returned from the Car function. You'll also need to use the 'this' keyword properly
// in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above,
// use the proper syntax that will allow for you to call the getYear function with the prius
// then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);
getYear.call(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.apply(myUser); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here
// Undefined, because this would refer to window, and window.username doesn't exist.
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
//The window
//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
