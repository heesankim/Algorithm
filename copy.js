// deep copy : 깊은 복사 (원시)
// shallow copy : 얕은 복사 (객체)

// 💡원시타입
let num1 = 1;
let num2 = num1; // 관점 1(정답) : num2에는 1이라는 값이 들어간다.  <= deep copy 관점
// 자바스크립트가 원시값을 대입할 때는 num1에 있는 1이라는 값을 num2에 넣는 동작을 한다.
// 관점 2 : num2에 num1 자체를 넣는다. <= shallow copy 관점
num2 = 2; // num1에 영향을 미치지 못한다.

console.log(num1, num2); // num1: 1, num2: 2
// 추측1 -> num1: 1, num2: 2
// 추측2 -> num1: 2, num2: 2 <= shallow copy

// 원시값들은 deep copy 가 된다. num2에 num1의 값을 넣는다. num1과 num2는 상관이없다.
// 이렇게 해석하자.

const lame = {
  name: "라매개발자",
  subscriber: 3000,
};

let lameCopy = lame; // lameCopy에 lame 자체가 복사된다.
console.log(lame) // 일단 서로 값 동일
console.log(lameCopy) // 일단 서로 값 동일

lameCopy.subscriber = 100000;

console.log(lame);
console.log(lameCopy);

// 객체타입은 shallw copy가 이뤄져서 복사된 값의 프로퍼티의 값을 수정했지만
// 원래 객체의 프로퍼티의 값이 바뀌었다.

// 왜 원시값은 deep copy로 하고 객체는 shallow copy로 했냐?
// deep copy로 구현을 하면 굉장히 비효율적이다.

let lameCopy2 = {...lame} // 이렇게 하면 deep copy를 할 수가 있다.

lameCopy2.subscriber = 20000
console.log(lame)
console.log(lameCopy2)