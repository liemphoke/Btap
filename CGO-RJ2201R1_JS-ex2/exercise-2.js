//Cho các đối tượng sau
const obj = {
  id: 1,
  name: 'Trainer',
  age: 33,
  skills: ['Javascript', 'React', 'NextJS', 'Typescript']
};

const anotherObj = {
  id: 2,
  name: 'Trainee',
  age: 22,
  isFinite: false,
  isBeingTrained: true
};

//1. Hãy clone 2 đối tượng trên bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *

const clone1 = {};

for (let key in obj) {
  clone1[key] = obj[key]
}

const clone2 = Object.assign({}, obj)

const clone3 = {...obj}


//2. Đoán thử kết quả sau đây, không chạy thử
const copiedObj = obj;
copiedObj.skills = ['React', 'Typescript'];
console.log(obj.skills);
// * YOUR ANSWER HERE *
// Là 1 mảng có 2 phần tử: 'React' và 'Typescript'


//3. Hãy merge 2 đối tượng đã cho thành 1 đối tượng mới bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *

const merge1 = {}

Object.assign(merge1, obj, anotherObj)

const merge2 = {...obj,...anotherObj}


//4.  Sử dụng Map trong ES6, hãy tạo ra 1 biến có giá trị như sau:
/*
[
  ["whole numbers": [1 ,2 ,3 ,4]],
  ["Decimal numbers": [1.1, 1.2, 1.3, 1.4]],
  ["negative numbers": [-1, -2, -3, -4]]
]
*/
// *YOUR CODE HERRE *

let map = new Map()
map.set("whole numbers", [1 ,2 ,3 ,4]).set("Decimal numbers", [1.1, 1.2, 1.3, 1.4]).set("negative numbers", [-1, -2, -3, -4])


//5. Sử dụng Map trong ES6, hãy tạo ra 1 map từ 2 đối tượng đã cho trên
// *YOUR CODE HERRE *

let map1 = new Map()
map1.set("obj", obj).set("anotherObj", anotherObj)


