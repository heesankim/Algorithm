// function sameFrequency(num1,num2){
//   let str1 = String(num1)
//   let str2 = String(num2)
//   if(str1.length !== str2.length) return false
//   let lookUp ={}
//   for(let i = 0; i < str1.length; i++){
//       let letter = str1[i]
//       if(lookUp[letter]){
//           lookUp[letter] = lookUp[letter] + 1
//       }else{
//           lookUp[letter] = 1;
//       }
//   }
//   for (let i = 0; i < str2.length; i++){
//       let letter = str2[i];
//       if(!lookUp[letter]) return false;
//       else{
//           lookUp[letter] -= 1;
//       }
//   }
//   return true;
// // good luck. Add any arguments you deem necessary.
// }
// console.log(sameFrequency(3589578, 5879385))

function areThereDuplicates(...args) {
  let arr = [...args]
  console.log(arr)
  arr.sort((a,b) => a - b)
  console.log(arr)

  let p1 = 0
  for (let i = 1; i < arr.length; i++){
      if(arr[i] === arr[p1]) return true
      else{
          p1++;
      }
  }
  return false
// good luck. (supply any arguments you deem necessary.)
}

console.log(areThereDuplicates("a","b","c","a"))
