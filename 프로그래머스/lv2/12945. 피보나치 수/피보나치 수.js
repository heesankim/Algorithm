function solution(n) {
    let answer = [0,1]
    if(n === 2) return 1
    for(let i = 2; i <= n; i++){
        answer.push((answer[i-1] + answer[i-2]) % 1234567)
    }
    console.log(answer)
    return answer[n]
}