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

// //Arguments and Parameters
// const speak = function(name ='luigi', time = 'night')
// {
//   console.log(`good ${time} ${name}!?`)
// }; //You need a semi-colon for an expression

// speak();
// speak("mario", "morning");
// speak("toad");

//Tutorial 4.3
// Returning Values

// const calcArea = function(radius)
// {
//   // let area = 3.14 * radius**2;
//   // return area;
//   return 3.14 * radius**2;
// };

// const areaGiven = calcArea(5);
// console.log(areaGiven);

//Tutorial 4.4
//Regular Funciton
// const calcArea = function(radius)
// {
//   return 3.14 * radius**2;
// };

//Arrow Function (Shorten the Function Expression)
const calcArea = (radius) => 3.14 * radius**2;

const areaGiven = calcArea(5);
console.log('area is: ', areaGiven);

//PRACTICE
const greet1 = function()
{
  return 'hello';
};

const greet = () => 'hello';

const bill1 = function(product, tax)
{
  let total = 0;
  for(let i = 0; i < product.length; i++)
  {
    total += product[i] + product[i] * tax;
  }
  return total;
}

//Not Much Difference
const bill = (product, tax) =>
{
  let total = 0;
  for(let i = 0; i < product.length; i++)
  {
    total += product[i] + product[i] * tax;
  }
  return total;
}