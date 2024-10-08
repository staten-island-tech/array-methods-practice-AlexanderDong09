const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

// 1. Log each student’s name and grade
students.forEach((student) =>
  console.log(student.name + "'s grade is " + student.grade + "%.")
);

console.log("---------------------------");

// don't call yourself out like that. keep your head up lil bro
const dumbass = students.filter((student) => student.grade < 90);
dumbass.forEach((student) =>
  console.log(
    "this dummy (u) " +
      student.name +
      "'s grade is below ninety lmaoooo point and laugh"
  )
);

console.log("---------------------------");

const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);

console.log("---------------------------");

// use <= smh my head
const youngStudents = students.filter((student) => student.age >= 21);
// what if im not 21
console.log(youngStudents);

console.log("---------------------------");

const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

products.forEach((product) =>
  console.log(product.name + " costs " + product.price + " dollars.")
);

console.log("---------------------------");

// make dat joint expensive
//it do be like that

products.forEach((product) =>
  console.log(
    // nice spelling loiser
    "Unfortunately for you, due to capatilism costs the item " +
      product.name +
      " now costs " +
      Math.trunc(product.price * 1.1) +
      " dollars. get yo money up not yo funny up lil boy"
  )
);

console.log("---------------------------");

const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});

console.log("---------------------------");
//keep your money up, not your funny up little bro :skull:
