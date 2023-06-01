// Block Scope (let/const)

// let

let x = 10;
let y = 50;
if (x === 10) {
  let y = 500;
  console.log("y ใน = " + y);
}
console.log("y นอก = " + y);

console.log("-------------");

//const

const z = 50;
console.log(x);
