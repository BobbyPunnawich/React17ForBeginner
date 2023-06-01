// ทำงานกับ Object

// ตัวแปรเก็บข้อมูล

//แบบเดิม
const customer = {
  customerName: "บ๊อบบี้",
  customerAge: 40,
  customerAddress: "กรุงเทพ",
};

console.log(customer);

//แบบใหม้

const username = "BobbyPunnawich";
const age = "25";
const address = "บางกอก";

const newCustomer = {
  username,
  age,
  address,
  showData() {
    console.log("ข้อมูลลูกค้าชื่อว่า = " + username);
  },
};

console.log(newCustomer);
newCustomer.showData();
