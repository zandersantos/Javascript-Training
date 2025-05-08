//Tutorial 4: Functions

//Tutorial 4.1

// //Function Expression
// const speak = function()
// {
//   console.log('good day!?')
// }; //You need a semi-colon for an expression

// greet();
// greet();
// greet();

// speak();
// speak();

// //Function Declaration
// function greet()
// {
//   console.log('hello there');
// }


//Tutorial 4.2

//Arguments and Parameters
const speak = function(name ='luigi', time = 'night')
{
  console.log(`good ${time} ${name}!?`)
}; //You need a semi-colon for an expression

speak();
speak("mario", "morning");
speak("toad");