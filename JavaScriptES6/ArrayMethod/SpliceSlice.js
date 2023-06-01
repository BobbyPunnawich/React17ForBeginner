// Splice & Slice

const data1 = [10, 20, 30, 40, 50];

// Splice(ตำแหน่งที่จะลบ,จำนวนที่จะลบ) --> เปลี่ยนแปลงข้อมูลต้น

data1.splice(1, 2, "แทรก");
console.log(data1);

console.log("-------------");

const data2 = [10, 20, 30, 40, 50];

// Slice(ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย-1) --> แค่เลือกshow ไม่มีการเปลี่ยนแปลง

console.log(data2.slice(1, 6));
console.log(data2);
