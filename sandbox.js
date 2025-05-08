//Tutorial 6 - The Document Object Model

//Tutorial 6.1
// //Grabs ONLY the first p tag
// const para = document.querySelector('p');
// console.log(para);

// //Grabs the tag with the error class
// const para2 = document.querySelector('.error');
// console.log(para2);

// //Grabs a div tag with the error class
// const para3 = document.querySelector('div.error');
// console.log(para3);

// const paras = document.querySelectorAll('p');

// console.log(paras[0]);

// paras.forEach(para =>
// {
//   console.log(para);
// });

// const errors = document.querySelectorAll('.error');
// console.log(errors);


//Tutorial 6.2

//Get Element by ID
const title = document.getElementById('page-title');
console.log(title);

//Get Elements by Their class name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);
            //You cannot do forEach


//Get Elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);
