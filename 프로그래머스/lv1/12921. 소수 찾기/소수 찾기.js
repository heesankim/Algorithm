
let solution = (n) => {
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);
 
    for (let i = 2; i < Number(n ** 0.5) + 1; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
                
            }
        }
    }
let count = 0
    arr.map(item =>{
        if(item === true){
            count++
        }
    });
    return count
}

console.log(solution(10000));


// function solution(n) {
    
//     let count = 1; 
    
//     for(let i=2; i<=n; i++){ 
//          if(isPrime(i)) count++;
//     }


//     function isPrime(num){
//         if(num % 2 === 0) return false;
//         for(let i = 2; i < Math.sqrt(num)+1; i++){
//             if(num%i==0) return false; 
//         }
//         return true;
//     }

//     return count;
// }
