function numberCompare1(num1, num2) {
  return num1 - num2;
}

// 오름차순
console.log([5, 3, 9, 1, 16].sort(numberCompare1)); // [1, 3, 5, 9, 16]

function numberCompare2(num1, num2) {
  return num2 - num1;
}


// 내림차순
console.log([5, 3, 9, 1, 16].sort(numberCompare2)); // [16, 9, 5, 3, 1]


function compareByLen(str1,str2){
  return str1.length - str2.length
}

console.log(["heewsan","ipad","mouse","computerMachine"].sort(compareByLen))
