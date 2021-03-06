// 1. Cho trược đoạn code sau
let sum = 0;
{
  let x = 5;
  let y = 10;
  sum = x + y;
}

//Khi console.log biến x hoặc y ở đây (ngoài cặp dấu {}), thì điều gì sẽ xảy ra, giá trị của biến x lúc này là bao nhiêu? (không được chạy thử)
// Ans: not define
//Khi console.log biến sum ở đây, thì điều gì sẽ xảy ra, giá trị của biến sum lúc này là bao nhiêu? (không được chạy thử)
// Ans: 15

// 2. Cho trước function sau
function random() {
  let x = Math.floor(Math.random() * 11);
  return x;
}

//khi console.log biến x ở đây (ngoài function), thì điều gì sẽ xảy ra, giá trị của biến x lúc này là bao nhiêu? (không chạy thủ)
// Ans: not define

// 3. Tạo ra 1 hàm với 2 tham số đầu vào là x và y, trong đó:
// - giá trị mặc định của x là 5
// - giá trị mặc định của y là 10
// - trả về giá trị trung bình được làm tròn của x và y
// * YOUR CODE HERE *

sum = (x = 5, y = 10) =>{
  return Math.round((x+y)/2);
}

// 4. Tạo ra 1 hàm với 2 tham số đầu vào là person1 và person2, đều là 1 object với 4 props:
// - name: string, giá trị mặc định là "anonymous"
// - age: number, giá trị mặc định là 23
// - averageRank: number, giá trị mặc định là 5.0
// xét các trường hợp:
// - so sánh averageRank của 2 tham số, averageRank lớn nhất VÀ averageRank lớn hoặc bằng 8, alert ra "*name, *age tuổi, điểm số trung bình: *averageRank sẽ là trainer!"
// - nếu không có ai có điểm số lớn hơn hoặc bằng 8, alert ra "Lớp tự học!"
// * YOUR CODE HERE *

func = (person1 = {name: "anonymous", age: 23, averageRank: 5.0}, person2 = {name: "anonymous", age: 23, averageRank: 5.0}) =>{
  let person3 = person1.averageRank > person2.averageRank? person1: person2;
  if(person3.averageRank < 8)
    alert("Lớp tự học!");
  else
    alert(`${person3.name} ${person3.age} tuổi, điểm số trung bình: ${person3.averageRank} sẽ là trainer!`)
}

// 5. Cho trước 1 đối tượng như sau
const trainer = {
  name: 'Jason Nguyen',
  age: 33,
  mainSkills: ['React', 'Typescript'],
  isMarried: true
};

// Hãy sử dụng destructuring, access và console.log ra tất cả các props của đối tượng trên
// * YOUR CODE HERE *

const {name, age, mainSkills, isMarried} = trainer;
console.log(name);
console.log(age);
console.log(mainSkills);
console.log(isMarried);

// 6. alias các props tương ứng của đối tượng trên như sau:
// - name -> fullName
// - age -> yearsOld
// - mainSkills -> strongPoints
// - isMarried -> hasAWife
// console.log ra tất cả các alias đó và quan sát kết quả
// * YOUR CODE HERE *

const {name: fullName, age: yearsOld, mainSkills: strongPoints, isMarried: hasAWife} = trainer;
console.log(fullName);
console.log(yearsOld);
console.log(strongPoints);
console.log(hasAWife);

// 7. convert tất cả các hàm trong file bài tập này sang dạng arrow function
// * YOUR CODE HERE *

random = () => {
  let x = Math.floor(Math.random() * 11);
  return x;
}

// 8. Clone ra 1 object mới từ object trainer trên, với tên gọi là clonedTrainer (sử dụng spread syntax)
// - thêm vào object vừa được clone trên các props: hasAnyCert dạng boolean, isOverloaded dạng boolean
// * YOUR CODE HERE *

const clonedTrainer = {...trainer};
clonedTrainer.hasAnyCert = true;
clonedTrainer.isOverloaded = false;
console.log(clonedTrainer);

// 9. Tạo ra 1 hàm với 2 tham số bất kỳ được xác định trước, sử dụng spread syntax đẻ dại diện cho tất cả các tham số còn lại.
// - Hàm có chức năng console.log ra 2 tham số được xác định trước đó
// - Hàm có chức năng lặp qua tất cả các tham số còn lại, sau đó console.log lần lượt tất cả các tham số đó
// * YOUR CODE HERE *

fun = (name, age, ...res) =>{
  console.log(name);
  console.log(age);
  for (const value of res) {
    console.log(value);
  }
}

function abc(){
  
}

fun("a", "b", "c", "d");