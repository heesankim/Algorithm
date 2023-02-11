function solution(n) {
    let measureArr = [1]
    let count = 1
    for(let i = 2; i <= n; i++){
        if(n % i === 0){
            measureArr.push(i)
        }
    }
    for(let j = 1; j < measureArr.length; j++){
        if(measureArr[j] % 2 ===1){
            count++
        }
    }
    return count
}


// n이 매개변수로 주어짐
// 연속된 자연수들로 n을 표현하는 방법의 수를 return 하는 함수를 짜라.