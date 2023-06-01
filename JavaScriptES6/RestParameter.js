//Rest Parameter

//Note : ตั้งชื่อfunctionซ้ำไม่ได้

summation2 = (x, y) => {
  return x + y;
};

summation3 = (x, y, z) => {
  return x + y + z;
};

//Rest Parameter Using Arr (ไม่จำกััดจำนวน parameters)
summationArr = (...numberArr) => {
  let sum = 0;
  for (let number of numberArr) {
    sum += number;
  }
  return sum;
};
console.log(summation2(1, 2));
console.log(summation3(1, 2, 3));
console.log(summationArr(1, 2, 3, 4, 5));
