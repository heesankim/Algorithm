// 선택 정렬이 잠재적으로 버블 정렬보다 나은 시나리오는 단 하나인데,
// 어떤 이유나 상황으로 스왑 수를 최소화하는 경우

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr,i,lowest)
      // let temp = arr[i];
      // arr[i] = arr[lowest];
      // arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
