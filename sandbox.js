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
// const title = document.getElementById('page-title');
// console.log(title);

// //Get Elements by Their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
//             //You cannot do forEach


// //Get Elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);


//Tutorial 6.3

// const para = document.querySelector('p');
// //console.log(para.innerText);
// //para.innerText = 'ninjas are awesome!';

// const paras = document.querySelectorAll('p');
// // paras.forEach(para =>
// // {
// //   console.log(para.innerText);
// //   para.innerText += ' new text';
// // });

// const content = document.querySelector('.content');
// //console.log(content.innerHTML);
// //content.innerHTML = '<h2>This is a new h2</h2>';

// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person =>
// {
//   content.innerHTML +=  `<p>${person}</p>`;
// });

//Tutorial 6.4

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.thenetninja.co.uk');

// link.innerText = "TheNet Ninja Website";

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');

// mssg.setAttribute('style', 'color: green');


//Tutorial 6.5

// //Add additional styles
// const title = document.querySelector('h1');
// //title.setAttribute('style', 'margin: 50px');

// //Get the styles values
// console.log(title.style);
// console.log(title.style.color);

// //Update styles
// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// //Remove this style
// title.style.margin = '';

// //Tutorial 6.6
// const content = document.querySelector('p');
// //Get all classes
// console.log(content.classList);
// //Add Class
// content.classList.add('error');
// //Remove Class
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p =>
{
  //console.log(p.textContent);
  if(p.textContent.includes('error'))
  {
    p.classList.add('error');
  }
  if(p.textContent.includes('success'))
    {
      p.classList.add('success');
    }
});

const title = document.querySelector('.title');

//Adds the test
title.classList.toggle('test');
//Removes the test
title.classList.toggle('test');

