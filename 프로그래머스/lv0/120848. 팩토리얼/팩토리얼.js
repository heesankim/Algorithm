function solution(n) {
    let i = 0
    let sum = 1
    while(sum <= n){
        i = i + 1
        sum = sum * i
    }
    return i - 1;
}