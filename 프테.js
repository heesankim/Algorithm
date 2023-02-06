let arr = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]



arr.forEach((e) => {
  e.sort()
});

let arr1 = []
let arr2 = []

arr.forEach((i) =>{
  arr1.push(i[0])
  arr2.push(i[1])
})
// console.log(arr);
// console.log(arr1)
// console.log(arr2)

// const h = arr1.reduce((max, val) => max > val ? max : val)
// const w = arr2.reduce((max, val) => max > val ? max : val)
const h = Math.max(...arr1)
const w = Math.max(...arr2)
console.log(w*h)
// arr.reduce((max, val) => max > val ? max : val)
// console.log(w)

console.clear()

// 소수 판별 
// 시간복잡도 O(N)
const isPrime = function(number) {
  for(let i = 2; i< number;i ++){
    if(number % i === 0){
      return false
    }
  }
  return true
}
const result = isPrime(7)
console.log(result)