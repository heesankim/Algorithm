// 중요❗️ -> 객체안에서 arrow function을 넣는 경우는 그냥 function 넣는 경우와 this 범위가 다르다.

const a = "age";

const obj1 = {
  id: 1,
  name: "라매",
  "my name": "라매개발자",
  [a]: 3,
  getNameHeesan: function () {
    console.log("김희산입니다");
  },
  getName: () => {
    console.log("희산입니다");
  },
  getNameing() {
    // 이게 제일 깔끔하네
    console.log("function this: ", this);
    console.log(this.name);
  },

  getNameArrow: () => {
    // arrow 함수의 this가 갖고 있는 것은 자신이 속한 함수의 상위 스코프를 갖게 된다.
    // 상위스코프가 전역범위이기 때문에 아무것도 없는 상태이다.
    console.log("arrow function this : ", this);
    console.log(this.name); // undefined가 나오게 된다.
  },
};
// 메서드 표현 방법 여러개가 있어용~~
// obj1.getNameing(); // this : 자신의 속한 스코프의 함수를 가리킨다.
// obj1.getNameArrow() -> this : {}  따라서 key값의 value도 undefined 이다.

console.log(obj1.id);
console.log(obj1.name);
console.log(obj1["my name"]);
console.log(obj1[a]);
