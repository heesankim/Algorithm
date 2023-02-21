function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target === array[mid]) return mid;
    else if (target > array[mid]) start = mid + 1;
    else end = mid - 1;
  }
  return arr[mid] === target ? mid : -1;
}

console.log(
  binarySearch([2, 5, 6, 9, 15, 20, 30, 54, 76, 192, 5123, 21382], 30)
);
