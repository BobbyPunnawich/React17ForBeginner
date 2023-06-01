//Arrow Function ใช้กรณี มีคำสั่งไม่เยอะ

//แบบเต็ม
function fullname(fname, lname) {
  return fname + " " + lname;
}

console.log(fullname("bobby", "yiam"));

//

arrowFullName = (fname, lname) => fname + " " + lname;

console.log(arrowFullName("bobby", "yiamsom"));

setAge = (age) => "อายุ = " + age;

console.log(setAge(19));
