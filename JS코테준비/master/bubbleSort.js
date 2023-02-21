// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for(let j = 0; j < i - 1; j++){
//       console.log(arr)
//       if(arr[j] > arr[j+1]){
//         // SWAP
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp;
//       }
//     }
//     console.log("ONE PASS~")
//   }
//   return arr;
// }

// console.log(bubbleSort([37,45,29,8,12,465,234,845,12,6,3,3,9,6,43,9,9,5,3,7,]))
// [37,45,29,8]
// [37,29,8,45]
// [8,29,37,45]

//optimized with noSwaps
function bubbleSort(arr) {
  let noSwaps;
  let cnt = 0
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr);
      cnt++
      console.log(cnt)
      if (arr[j] > arr[j + 1]) {
        // SWAP
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
console.log(bubbleSort([8,1,2,3,4,5,6,7]))