let test = "1101020201301301302130"; // 1은  7개
test = test.split("");
console.log(test);
let len = test.filter((item) => item === "1").length; // 요소의 갯수 세는 방법임

console.log(len);
