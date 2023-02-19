// 두개의 포인터가 한방향으로 이동해야 한다.

function countUniqueValue(array) {
  array.sort((a, b) => a - b); // 들어오는 인자값이 정렬이 안되어 있는 경우
  let p1 = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[p1] !== array[i]) {
      p1++;
      array[p1] = array[i];
    }
    // console.log(p1, i);
  }
  console.log(array)
  return p1 + 1;
}

let ex = [1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7];
console.log(countUniqueValue(ex));
