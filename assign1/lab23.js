const fullName = "Phan Van Manh";
const birthYear = 2005;
const isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

let calculatedAge = currentYear - birthYear;

console.log(
  `Tên: ${fullName},
     Tuổi: ${calculatedAge},
    Là học sinh: ${isStudent ? "Đúng" : "Sai"}`
);
