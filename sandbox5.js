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
user.logBlogs();

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