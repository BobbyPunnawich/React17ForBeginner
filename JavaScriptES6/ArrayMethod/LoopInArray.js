// Loop Array

// ForLoop , ForEach , ForOf

const data = [10, 20, 30, 40, 50];

console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);
console.log(data[4]);

console.log("---------------");

// ForLoop

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

console.log("---------------");

// ForEach

data.forEach((e) => {
  console.log(e);
});

console.log("---------------");

// ForOf

for (let e of data) {
  console.log(`สมาชิกของ Array Data = ${e}`);
}
