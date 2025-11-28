console.log("hello lab 41");

const human = {
  name: "manh",
  age: 20,
};

// get data
console.log(`Name: ${human.name}`);
console.log("Age: " + human.age);

// set data
human.address = "Binh Duong";
console.log(`Address: ${human.address}`);

// about

console.log(human);
console.log(`Details: ${human}`);

// một lưu ý khi sử dụng hoặc truyền một biến object thì

// Cách 1 dùng ","
console.log("Thông tin chi tiết: ", human);

// Cách 2 dùng JSON.stringify
console.log(`Detailed information: ${JSON.stringify(human)}`);
