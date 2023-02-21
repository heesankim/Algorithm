// 삽입정렬이 잘 작동하는 상황이 있음.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currrentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currrentVal; j--) {
      arr[j + 1] = arr[j];
    }
    // j선언시 let으로하니까 참조르 못함.. 밑에서
    arr[j + 1] = currrentVal;
    console.log(arr);
  } 
  return arr;
}
console.log(insertionSort([2, 1, 9, 76, 4]));

