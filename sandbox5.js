//Tutorial Video #5 - Objects

//Tutorial 5.1
//Object Literals

let user =
{
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blog: ['why mac & cheese rules', '10 things to make with marmite']
};

//Basic Calling
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.email);
console.log(user.location);
console.log(user.blog[0]);
console.log(user.blog[1]);

//Getting the Key
console.log(user['name']);
console.log(user['email']);

//Changing Values
user.age = 35;
console.log(user.age);
user['name'] = 'chun-li';
console.log(user['name']);

//Using Variables
const key = 'location';
console.log(user[key]);

//Getting the type of an object
console.log(typeof user);


