function addUpTo(n) {
  return n * (n + 1) / 2;
}


let t1 = performance.now();
console.log(addUpTo(1000000000)); // 21
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`); // Time Elapsed: 0.00009999999999999999 seconds.
