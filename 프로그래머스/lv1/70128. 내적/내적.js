function solution(a, b) {
    var answer = 0;
    if(a.length !== b.length) return null
    for(let i = 0 ; i < a.length; i++){
        answer = answer + a[i]*b[i]
        
    }
    return answer;
}

//  a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]

// -3 + -2 + 0 + 8  = 3
// -1 + 0 + -1 = -2