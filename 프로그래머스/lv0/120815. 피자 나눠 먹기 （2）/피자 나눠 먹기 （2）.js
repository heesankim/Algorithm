function solution(n) {
    var answer = 0;
    let temp = n
    while(true){
        if(n % 6 === 0){
            answer = n / 6
            break
        }else{
            n = n + temp
        }   
    }
    return answer;
}

// n명이 공평하게 피자를 먹기 위해 몇판(6조각) 이 필요한가?

