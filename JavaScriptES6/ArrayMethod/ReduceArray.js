// Array Reduce

const data = [10, 20, 30, 40];

// Map
const resultMap = data.map((e) => e * 2);

console.log(data);
console.log(resultMap);

console.log("------------");

// Filter
const resultFilter = data.filter((e) => e > 20);

console.log(data);
console.log(resultFilter);

console.log("------------");

// Reduce
// เริ่มมา value == 0  --> จบ1รอบ value == totalที่รีเทิร์นออกมา
const resultReduce = data.reduce((value, e) => {
  const total = e + value;
  return total;
}, 0);

console.log(resultReduce);
