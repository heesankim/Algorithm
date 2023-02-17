const obj1 = {
  id: 1,
  name: "라매",
  age: 3,
  habit: "coding",
};

// 꺼내서 변수에 할당 가능
// const id = obj1.id
// console.log("🚀 ~ file: Destructuring Assignment.js:10 ~ id", id)
// const name = obj1.name
// console.log("🚀 ~ file: Destructuring Assignment.js:11 ~ name", name)
// const age = obj1.age
// console.log("🚀 ~ file: Destructuring Assignment.js:12 ~ age", age)
// const habit = obj1.habit
// console.log("🚀 ~ file: Destructuring Assignment.js:13 ~ habit", habit)

// 위에랑 같음.. 졸라 편한데?
const { id, name, age, habit } = obj1; 

// console.log("🚀 ~ file: Destructuring Assignment.js:19 ~ habit", habit)
// console.log("🚀 ~ file: Destructuring Assignment.js:19 ~ age", age)
// console.log("🚀 ~ file: Destructuring Assignment.js:19 ~ name", name)
// console.log("🚀 ~ file: Destructuring Assignment.js:19 ~ id", id)

const arr1 = [1, "라매", 3];
// 백준이나 구름에서 인풋값 받을떄 배열로 받은다음 구조분해 할당으로 하면 편하게 선언할 수 있을 듯

// console.log("🚀 ~ file: Destructuring Assignment.js:28 ~ lameId", lameId)
// const lameName = arr1[1]
// console.log("🚀 ~ file: Destructuring Assignment.js:30 ~ lameName", lameName)
// const lameAge = arr1[2]
// console.log("🚀 ~ file: Destructuring Assignment.js:32 ~ lameAge", lameAge)

const [lameId, lameName, lameAge] = arr1;
console.log("🚀 ~ file: Destructuring Assignment.js:34 ~ lameAge", lameAge);
console.log("🚀 ~ file: Destructuring Assignment.js:34 ~ lameName", lameName);
console.log("🚀 ~ file: Destructuring Assignment.js:34 ~ lameId", lameId);


// 팁 : 객체는 필요한 값만 꺼내서 쓸 수 있지만 배열 같은 경우네는 중간 값이 필요 없다고 할지라도
// 전부다 쓰거나 아니면 _로 해주면 된다.