// Tutorial #2.1
// console.log(1);
// console.log(2);

//Tutorial #2.2
// let age = 25;
// let year = 2019;

// //Log age and year to console
// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// var score = 75;
// console.log(score);

//Tutorial #2.3
//Strings
// console.log("Hello, World!");

// let email = 'mario@thenetninja.co.uk';
// console.log(email);

// //Strings Concatenation
// let firstName = 'Brandon';
// let lastName = 'Sanderson';

// let fullName = firstName + " " + lastName;
// console.log(fullName);

//Tutorial #2.4
// //Getting Characters
// console.log(fullName[8]);

// //String Length
// console.log(fullName.length);

// //String Methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// //Common string Methods
//let email = "mario@thenetninja.co.uk";

//let result = email.lastIndexOf('n');
//let result = email.slice(2,5);
//let result = email.substr(4,10);
//let result = email.replace('m', 'w');
//let result = email.replace('n', 'w');

//console.log(result);

// Tutorial #2.5
// let radius = 10;
// const pi = 3.14;
//console.log(radius,pi);

//Math Operators: +,-,*,/,**,%

//console.log(10 / 2);

//let result = radius % 3;
//let result = pi * radius**2;

//Order of Operations: BEDMAS
// let reuslt = 5* (10-3)**2
// console.log(result);

//let likes = 10;
//likes ++; //add 1 to likes
//likes--; //remove 1 from likes
//likes += 10; //add the number to the current value of the variable
// likes -= 5;
// likes *= 2;
//likes /= 2;

// console.log(likes);

// //NaN = not a number
// console.log(5/"hello");
// console.log(5*"hi");

// let result = "the blog has " + likes + " likes";
// console.log(result);

//Tutorial #2.6
//Template Strings
const title = 'Best reads of 2019';
const author = "Mario";
const likes = 30;

//Concatenation Way
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';

//Template String Way
let result = `The blog called ${title} by ${author} has ${likes} likes`;

//Creating HTML templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;

console.log(result);
console.log(html);