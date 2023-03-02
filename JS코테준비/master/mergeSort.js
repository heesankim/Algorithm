// Mergesort 중에서 merge 에만 집중. 정렬된 배열 2개를 합병하는 함수
// '정렬되어있다' 는 게 초점임

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) { // 한 쪽이라도 배열에 요소가 남아있을 때
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // 배열 한쪽에 요소가 없을때 다른 배열의 요소들 전부 넣어줘야함
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// console.log(merge([], [2, 14, 99, 100]));

// 정렬
// 의사코드가 진짜 중요
// mergeSort의 원리를 알고 그것을 의사코드로 적고 코드로 구현 많이 해보면 가능하다.
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // 배열에 요소가 1개남을때까지 계속 쪼갬
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));

// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr2.slice(0, Math.floor(arr2.length / 2))); // (0, 3)
// console.log(arr2.slice(3))
