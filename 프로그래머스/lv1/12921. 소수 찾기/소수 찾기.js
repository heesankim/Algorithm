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