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

const dumbass = students.forEach((student) => student.grade > 90);
console.log(
  "this dummy " +
    students.name +
    "'s grade is below ninety lmaoooo point and laugh"
);
