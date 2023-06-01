//Spread Operator จัดการ Array
const newArray = [100, 200, 300];
const dataArray = [10, 20, ...newArray];
const newerArray = [0, 1];

// ... = spread data in array --> if no "..." will be [10,20,100,200,300,[0,1]]
dataArray.push(...newerArray);

console.log(dataArray);
