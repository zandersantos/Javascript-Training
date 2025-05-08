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
// const title = 'Best reads of 2019';
// const author = "Mario";
// const likes = 30;

// //Concatenation Way
// //let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';

// //Template String Way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;

// //Creating HTML templates
// let html = `
//   <h2>${title}</h2>
//   <p>By ${author}</p>
//   <span>This blog has ${likes} likes</span>
// `;

// console.log(result);
// console.log(html);

//Tutorial #2.7
//let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);
// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

//Array Methods

//let result = ninjas.join(',');
//let result = ninjas.indexOf('chun-li');
//let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken');
// result = ninjas.pop();
// console.log(result);

//Tutorial #2.8

// let age = null;
// console.log(age, age + 3, `the age is ${age}`);

//Tutorial #2.9
//Booleans and Comparison
// console.log(true, false, "true", "false");

// //Methods can return booleans
// let email = "luigi@thenetninja.co.uk";
// let names = ['mario', 'luigi', 'toad']

// //let result = email.includes('@');
// // let result = names.includes('luigi');
// // console.log(result);

// //Comparison Operators

// let age = 25;

// // console.log(age == 25);
// // console.log(age == 30);
// // console.log(age != 30);
// // console.log(age > 20);
// // console.log(age < 20);
// // console.log(age <= 25);
// // console.log(age >= 25);

// let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'crystal'); //true because shaun comes later (=greater)
// console.log(name > 'Shaun'); //true, A lowercase letter is greater than uppercase
// console.log(name > 'Crystal');

//Tutorial #2.10
// let age = 25;

// //Loose comparaison (Different types can still be equal)
// // console.log(age != 25);
// // console.log(age != '25');

// //Strict Comparison (different types cannot be equal)
// console.log(age === 25);// True
// console.log(age === '25');// False
// console.log(age !== 25);// False
// console.log(age !== '25');// True

//Tutorial #2.11

//Type Conversion
// let score = "100";
// // console.log(typeof score); // String
// // score = Number(score); //When you want the variable to become a number
// // console.log(score+1);
// // console.log(typeof score); //Int

// //let result = Number('hello');
// //let result = String(51);
// //let result = Boolean(100);
// let result = Boolean('');

// console.log(result, typeof result);

