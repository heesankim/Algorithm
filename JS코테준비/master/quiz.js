function same(arr1, arr2) {
  // 경계조건이 검사
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      // 요소가 없다면
      return false;
    }
    arr2.splice(correctIndex, 1); // 요소가 있다면 삭제
  }
  return true
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
