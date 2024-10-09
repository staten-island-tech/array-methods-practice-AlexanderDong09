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

const dumbass = students.filter((student) => student.grade < 90);
dumbass.forEach((student) =>
  console.log(
    "this dummy  " +
      student.name +
      "'s grade is below ninety lmaoooo point and laugh"
  )
);

console.log("---------------------------");

const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);

console.log("---------------------------");

const youngStudents = students.filter((student) => student.age <= 21);

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

products.forEach((product) =>
  console.log(
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
console.log("Unique Categories:", categories);

console.log("---------------------------");

const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log("Electronics:", electronics);

const expensiveProducts = products.filter((product) => product.price > 300);
console.log("Expensive Products:", expensiveProducts);

const goodProducts = products.filter((product) => product.rating >= 4.5);
console.log("Highly Rated Products:", goodProducts);

console.log("---------------------------");

products
  .filter((product) => product.rating >= 4.5)
  .forEach((product) =>
    console.log("The product " + product.name + " is highly rated")
  );

console.log("---------------------------");

products
  .filter(
    (product) => product.category === "Electronics" && product.price >= 1000
  )
  .forEach((product) => console.log(product));
