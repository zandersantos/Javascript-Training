//TUTORIAL VIDEO 3

//Tutorial 3.1
//For Loops
// for(let i = 0; i < 5; i++)
// {
//   console.log('in loop:',i);
// }
// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0;i < names.length; i++)
// {
//   //console.log(names[i]);
//   let html = '<div>${names[i]}</div>';
//   console.log(html);
// }

//Tutorial 3.2
//While Loops

// const names = ['shawn', 'mario', 'luigi'];

// // let i =3;
// // while(i <5)
// // {
// //   console.log('in loop: ', i);
// //   i++;
// // }

// let i = 0;
// while(i < names.length)
// {
//   console.log(names[i]);
//   i++;
// }

//Tutorial 3.3
//Do While Loops

// let i = 5;

// do
// {
//   console.log('val of i is: ', i);
//   i++;
// }
// while(i < 5)

//Tutorial 3.4
//If Statements

// const age = 25;
// if(age > 20)
// {
//   console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 3)
// {
//   console.log("that's a lot of ninjas");
// }

// const password = 'p@ssword';

// if(password.length >= 8)
// {
//   console.log('that password is long enough..');
// }

//Tutorial 3.5
//If Else Statements
// const password = 'p@ssword1234';

// if(password.length >= 12)
// {
//   console.log('that password is mighty strong')
// }
// else if(password.length >= 8)
// {
//   console.log('that password is long enough..');
// }
// else
// {
//   console.log('password is not long enough');
// }

//Tutorial 3.6
//Logical Operators - OR || and AND &&
const password = 'p@ssor';

if(password.length >= 12 && password.includes('@'))
{
  console.log('that password is mighty strong')
}
else if(password.length >= 8 || password.includes('@') && password.length > 5)
{
  console.log('that password is strong enough...');
}
else
{
  console.log('password is not strong enough');
}