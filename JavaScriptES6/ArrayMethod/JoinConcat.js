// Join Concat
const data = [100, 200, 300];

console.log(data);
// Join ไม่ได้ทำการเปลี่ยนแปลงข้อมูลในarrayเดิม --> แปลง Array -> String ex. a,b,c
console.log(data.join("***"));
console.log(data);

console.log("-------------");
// Concat
const data1 = [1, 2, 3];
const data2 = [4, 5];

const allData = data1.concat(data2);

console.log(data1);
console.log(data2);
console.log(allData);
