// Array Filter
const data = [10, 20, 30, 40];

const result = data.filter((e) => {
  return e > 20;
});

console.log(result);

console.log("-----------");

const data2 = [
  { name: "Bobby", salary: 25000, department: "Programmer" },
  { name: "Jojo", salary: 30000, department: "Marketing" },
  { name: "Nut", salary: 10000, department: "Internship" },
  { name: "Bell", salary: 50000, department: "Marketing" },
  { name: "Joy", salary: 10000, department: "Internship" },
];

const result2 = data2.filter((e) => {
  return e.salary > 10000;
});

console.log(data2);
console.log(result2);
