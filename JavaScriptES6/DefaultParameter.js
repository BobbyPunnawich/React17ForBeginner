// Default Parameter
getDataCustomer = (customerName, customerAddress = "bangkok") => {
  //   if (!customerAddress) {
  //     customerAddress = "กรุงเทพ";
  //   }
  const address = `ชื่อลูกค้า : ${customerName}
ที่อยู่ : ${customerAddress}`;
  return address;
};

console.log(getDataCustomer("Bobby", "999/36"));
console.log(getDataCustomer("Fame"));
