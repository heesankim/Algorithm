function solution(A,B){
    var answer = 0;
    let len = A.length
    A.sort((a,b) => a - b)
    B.sort((a,b) => b - a)
    for(let i = 0; i < len; i++){
        answer = answer + A[i]*B[i]
    }

    return answer;
}