//Tutorial Video #5 - Objects

//Tutorial 5.1
//Object Literals

const blogs = [
  {
    title: 'why mac & cheese rules', likes: 30
  },
  {
    title: '10 things to make with marmite', likes: 50
  }
];
//console.log(blogs);

let user =
{
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
  {
    title: 'why mac & cheese rules', likes: 30
  },
  {
    title: '10 things to make with marmite', likes: 50
  }],
  login()
  {
    console.log('the user logged in');
  },
  logout()
  {
    console.log('the user logged out');
  },
  logBlogs() //Arrow Functions do not work with 'this'
  {
    console.log('this user has written the following blogs:');
    this.blogs.forEach(blog=>
    {
      console.log(blog.title, blog.likes)
    }
    )
  }
};

//We want this.
//user.logBlogs();

//We dont want this. This just gets the Window.
// console.log(this);

// //Methods are functions but defined on an object. Ex. login^^
// user.login();
// user.logout();

// //Basic Calling
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.email);
// console.log(user.location);
// console.log(user.blog[0]);
// console.log(user.blog[1]);

// //Getting the Key
// console.log(user['name']);
// console.log(user['email']);

// //Changing Values
// user.age = 35;
// console.log(user.age);
// user['name'] = 'chun-li';
// console.log(user['name']);

// //Using Variables
// const key = 'location';
// console.log(user[key]);

// //Getting the type of an object
// console.log(typeof user);



//Tutorial 5.2
//Math Object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.8;
// console.log(Math.round(area));
// //No matter what the decimal is, brings it down to the whole number
// console.log(Math.floor(area));

// //No matter what the decimal is, brings it up to the whole number
// console.log(Math.ceil(area));

// //Removes the decimal points
// console.log(Math.trunc(area));

// //Random Numbers

// //Always between 0 & 1
// const random = Math.random();
// console.log(random);

// //Either 1 or 0
// console.log(Math.round(random));

// //Always between 1 & 100
// console.log(random*100);


//Primitive vs Reference
/*
Primitive is stored in a Stack.
- Stack space is limited.
Reference is stored in a Heap.
- Can hold unique and complex values but can be slow
*/

//Primitive Values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);


//Reference Values
const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 50;
console.log(userOne, userTwo); //they are both the same value now, because only their pointers were updated



