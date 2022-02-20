//Cho trước 1 mảng các trainee như sau:
const traineeIterator = [
  {
    id: 1,
    firtName: 'A',
    lastName: 'Nguyen',
    className: 'CGO-RJ2201R1',
    grade: 'C'
  },
  {
    id: 2,
    firtName: 'B',
    lastName: 'Tran',
    className: 'CGO-RJ2201R1',
    grade: 'D'
  },
  {
    id: 3,
    firtName: 'C',
    lastName: 'Dinh',
    className: 'CGO-RJ2201R1',
    grade: 'A'
  },
  {
    id: 4,
    firtName: 'D',
    lastName: 'Le',
    className: 'CGO-RJ2201R1',
    grade: 'B'
  },
  {
    id: 5,
    firtName: 'D',
    lastName: 'Hoang',
    className: 'CGO-RJ2201R1',
    grade: 'F'
  },
  {
    id: 6,
    firtName: 'E',
    lastName: 'Pham',
    className: 'CGO-RJ2201R1',
    grade: 'E'
  }
];

//1. Sử dụng forEach(), hãy console.log() ra full name (firstName + lastName) của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
traineeIterator.forEach(element => console.log(`${element.firtName} ${element.lastName}`))



//2. Sử dụng forEach(), hãy console.log() ra điểm số (grade) + full name (trong cùng 1 string, format: D Hoang / F) 
//của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
traineeIterator.forEach(element => console.log(`${element.firtName} ${element.lastName} / ${element.grade}`))


//3. Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi expectedTraineeArray, 
//trong đó các props của từng phần tử được đổi như sau:
// - newId: className-id
// - fullName: firstName lastName
// - rank: grade
//ex: {
//  newId: 'CGO-RJ2201R1-5,
//  fullName: 'D Hoang',
//  rank: 'F'
//}
// *YOUR CODE HERRE *
const expectedTraineeArray = traineeIterator.map(element => ({
  newId: `${element.className}-${element.id}`,
  fullName: `${element.firtName} ${element.lastName}`,
  rank: element.grade
}))

//4, Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi newTraineeArray,
//trong đó các props của từng phần tử được đổi như sau:
// - id: id
// - codeName: [className] - firstName lastName
// - classification: xét điều kiện:
// -> nếu đạt A grade trả về: 'Excellent'
// -> nếu đạt B grade trả về: 'Good'
// -> nếu đạt C grade trả về: 'Medium'
// -> nếu đạt D grade trả về: 'Weak'
// -> nếu đạt E grade trả về: 'Poor'
// -> nếu đạt F grade trả về: 'Disbanded'
// => tip: tạo ra 1 hàm, với đầu vào là grade, trả về giá trị tương ứng, không xét điều kiện trong forEach() body
// *YOUR CODE HERRE *
const getGrade = (grade) => {
  switch (grade) {
    case "A":
      return "Excellent";
      break;
    case "B":
      return "Good";
      break;
    case "C":
      return "Medium";
      break;
    case "D":
      return "Weak";
      break;
    case "E":
      return "Poor";
      break;
    case "F":
      return "Disbanded";
      break;
  }
}
const newTraineeArray = traineeIterator.map(ele => ({
  id: ele.id,
  codeName: `[${ele.className}] - ${ele.firtName} ${ele.lastName}`,
  classification: getGrade(ele.grade)
}))


//5. Lọc ra các trainee với grade dưới B
// *YOUR CODE HERRE *

const filterTrainee = traineeIterator.filter(ele => ele.grade>'B')


//6. Lọc ra các trainee với grade trên C, sau đố xét điều kiện sau:
// -> nếu số các trainee với grade trên C >= 50% sĩ số lớp, alert ra "Effective training!"
// -> nếu số các trainee với grade trên C < 30% sĩ số lớp, alert ra "Average training!"
// -> nếu số các trainee với grade trên C = 0, alert ra "Failed training!"
// *YOUR CODE HERRE *

// const filterTrainee2 = traineeIterator.filter(ele => ele.grade>'C')
// let rate = filterTrainee2.length/traineeIterator.length
// if(rate >= 0.5)
//   alert("Effective training!")
// else if(rate < 0.3)
//   alert("Average training!")
// else if(rate === 0)
//   alert("Failed training!")

//7. Tìm ra thành viên có grade A, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *

const traineeGradeA = traineeIterator.find(ele => ele.grade == 'A')
console.log(`${traineeGradeA.firtName} ${traineeGradeA.lastName}`)


//8. Tìm ra thành viên có grade F, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *

const traineeGradeF = traineeIterator.find(ele => ele.grade == 'F')
console.log(`${traineeGradeF.firtName} ${traineeGradeF.lastName}`)

//9. Sử dụng reduce, hãy tạo ra 1 string cấu thành từ điểm số của các thành viên trong mảng đã cho
// *YOUR CODE HERRE *

let stringGrade = traineeIterator.reduce((c,n)=>`${c}${n.grade} `,'')
console.log(stringGrade);

//10. (optional) Sử dụng reduce, hãy tạo ra 1 hàm tính được giai thừa của 1 số đầu vào. Ex: input 6 => 1*2*3*4*5*6 = 720
// *YOUR CODE HERRE *


//11. (optional) Hãy tạo ra 1 mảng mới, sử dụng 1 trong các cấu trúc lặp đã học, trong đó có các phần tử 
// - grade thấp nhất
// - grade cao nhất
// - grade trung bình dạng số, biết các giá trị tương ứng của từng grade như sau: A=1, B=2, ... , F=5
// *YOUR CODE HERRE *



