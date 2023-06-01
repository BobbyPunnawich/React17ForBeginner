// ค้นหาข้อมูลภายใน Array

// indexOF(ข้อมูล) => ผลการค้นหา : ตำแหน่ง Index ที่ค้นเจอ , ค้นไม่เจอ : -1
// find(ข้อมูล) => ผลการค้นหา : ข้อมูลที่เจอ , ค้นไม่เจอ : undefined
// findIndex(ข้อมูล) => ผลการค้นหา : ตำแหน่ง Index ที่ค้นเจอ , ค้นไม่เจอ : -1

const colors = ["แดง", "เขียว", "น้ำเงิน", "ม่วง", "ขาว"];

console.log(colors.indexOf("แดง"));
console.log(colors.indexOf("ดำ"));
console.log(colors.findIndex("แดง"));
console.log(colors.findIndex("ดำ"));

console.log("---------------");

const search1 = colors.find((e) => e === "เขียว");
console.log(search1);
const search2 = colors.find((e) => e === "ดำ");
console.log(search2);

console.log("---------------");
