// 1. Khai báo 1 biến bootcampClass là 1 object, với các props như sau:
// - name: tên lớp, giá trị là 1 string tuỳ chọn
// - monitor: là 1 object với các props: name (string), age (só nguyên dương), averageScore (số thập phân, giá trị nhỏ hơn 10) có giá trị tuỳ chọn
// - headTeacher: là 1 object với các props: name(string), age (số nguyên dương), grade (enum, là 1 trong các thang rate: A,B,C,D,E,F)
// - students: là 1 array với 20 bạn, props tương tự như monitor và chỉ khác giá trị
// * YOUR CODE HERE *
const enumGrade = { A: "A", B: "B", C: "C", D: "D", E: "E", F: "F" };
const { A, B, C, D, E, F } = enumGrade;

const bootcampClass = {
  name: "Class 1",
  monitor: {
    name: "Monitor 1",
    age: 18,
    averageScore: 7.5,
  },
  headTeacher: {
    name: "Head Teacher 1",
    age: 30,
    grade: A,
  },
  students: [
    { name: "Studen 1", age: 18, averageScore: 7.5 },
    { name: "Studen 2", age: 19, averageScore: 7.3 },
    { name: "Studen 3", age: 18, averageScore: 6.7 },
    { name: "Studen 4", age: 20, averageScore: 8.2 },
    { name: "Studen 5", age: 18, averageScore: 8.5 },
    { name: "Studen 6", age: 18, averageScore: 7.5 },
    { name: "Studen 7", age: 19, averageScore: 7.3 },
    { name: "Studen 8", age: 18, averageScore: 6.7 },
    { name: "Studen 9", age: 20, averageScore: 8.2 },
    { name: "Studen 10", age: 18, averageScore: 8.7 },
    { name: "Studen 10", age: 18, averageScore: 9.5 },
    { name: "Studen 12", age: 19, averageScore: 7.2 },
    { name: "Studen 13", age: 18, averageScore: 6.9 },
    { name: "Studen 14", age: 20, averageScore: 8.8 },
    { name: "Studen 15", age: 18, averageScore: 6.5 },
    { name: "Studen 16", age: 18, averageScore: 6.5 },
    { name: "Studen 17", age: 19, averageScore: 7.3 },
    { name: "Studen 18", age: 18, averageScore: 6.5 },
    { name: "Studen 19", age: 20, averageScore: 8.9 },
    { name: "Studen 20", age: 18, averageScore: 10.0 },
  ],
};

console.log(bootcampClass);

// 2. Tạo 1 hàm đọc ra tên của bạn lớp trưởng (monitor) với tham số đầu vào (argument) là object bootcampClass trên
// * YOUR CODE HERE *

const getMonitorName = (bootcampClass) => `${bootcampClass.monitor.name}`;

// 3. Tạo 1 hàm đọc ra tên của thầy giáo chủ nhiệm (headTeacher) với tham số đầu vào (argument) là object bootcampClass trên
// * YOUR CODE HERE *

const getHeadTeacherName = (bootcampClass) => `${bootcampClass.headTeacher.name}`;

// 4. (optional) Tạo 1 hàm tính tổng số điểm trung bình của tất cả sinh viên trong lớp, với tham số đầu vào (argument) là object bootcampClass trên
// * YOUR CODE HERE *

const getAvgScore = (bootcampClass) => {
  let sum = 0;
  bootcampClass.students.forEach((element) => {
    sum += element.averageScore;
  });
  return (sum / bootcampClass.students.length).toFixed(2);
};

console.log(getAvgScore(bootcampClass));

// 5. Xét điêm trung bình của lớp trưởng (monitor),
// - nếu điểm số trên 7.5 thì alert ra "Đạt yêu cầu!"
// - nếu điểm từ 7.5 - 8.5 thì alert ra "Quá là đạt yêu cầu luôn!"
// - nếu điểm từ 8.5-10 thì alert ra "Bạn ấy không thuộc về thế giới này"
// - còn lại thì alert ra "Thay lớp trưởng thôi!"
// tip: sử dụng if/else if/else hoặc switch/case/default
// * YOUR CODE HERE *

// let value = bootcampClass.monitor.averageScore;

// if(value >= 8.5)
//     alert("Bạn ấy không thuộc về thế giới này");
// else if(value >= 7.5)
//     alert("Quá là đạt yêu cầu luôn!");
// else if(value >= 6.5)
//     alert("Đạt yêu cầu!");
// else
//     alert("Thay lớp trưởng thôi!");


// 6. Sử dụng for hoặc while hoặc do-while, lặp qua tất cả sinh viên của lớp, console.log ra từng sinh viên
// * YOUR CODE HERE *

// for (const student of bootcampClass.students) {
//   console.log(student);
// }

// 7. Sử dụng for hoặc while hoặc do-while, lặp qua tất cả sinh viên của lớp, tính ra tổng số điểm trung bình. Sau đó xét các case:
// - Nếu điểm số thấp hơn 100, alert ra "Trainer thất bại!"
// - Nếu điểm số trong khoảng 100 - 150, alert ra "Tạm đạt yêu cầu!"
// - Nếu điểm số trong khoảng 150 - 200, alert ra "Đạt yêu cầu!"
// tip: sử dụng if/else if/else hoặc switch/case/default
// * YOUR CODE HERE *

// let sum = 0;
// for (const student of bootcampClass.students) {
//   sum+=student.averageScore;
// }

// if(sum < 100)
//     alert("Trainer thất bại!");
// else if(sum < 150)
//     alert("Tạm đạt yêu cầu!");
// else if(sum <= 200)
//     alert("Đạt yêu cầu!");

// 8. (nâng cao, optional) Biến hàm ở bài số 2 và 3 thành method của object bootcampClass, thay thế đầu vào bằng từ khoá this
// * YOUR CODE HERE *
bootcampClass.getMonitorName = function () {
  console.log(getMonitorName(this));
}
bootcampClass.getMonitorName();
function abc(){
  console.log(arguments);
}

abc();
abc(1, 2, 3);
abc(1, 2);