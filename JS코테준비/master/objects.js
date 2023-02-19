// 어떻게 자바스크립트가 어떤 정보를 객체 안에 상수 시간안에 저장 할 수 있는가?
// 원하는 내용을 상수시간 안에 불러 올 수도 있다.
// 입력, 수정, 제거, 접근 모두 상수 시간
// 탐색은 O(N) -> 탐색은 key를 찾는게 아니고 value를 찾는 것임.

let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// O(N) 선형 시간이다. 속성이 100개면 연산도 100번
Object.keys(instructor); // ["firstName", "isInstructor", "favoriteNumbers"]
Object.values(instructor); // ["Kelly", true, [1, 2, 3, 4]]
Object.entries(instructor); // [["firstName", "Kelly"], ["isInstructor", true], ["favoriteNumbers", [1, 2, 3, 4]]]

// "x" <- x라는 속성이 있는지 검사. 상수 시간임
instructor.hasOwnProperty("firstName"); // true

// function charCount(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result;
// }

// refatoring
function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
}
console.log(charCount("Hello WORLD hi!!!"));