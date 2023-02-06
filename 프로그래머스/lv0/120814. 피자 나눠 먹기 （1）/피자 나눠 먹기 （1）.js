function solution(n) {
    var answer = 0;
    if(n <= 7){
        answer = 1
        return answer;
    }
    if(n % 7 === 0){
        answer = parseInt(n / 7)
        return answer;
    }   
    else{
        answer = parseInt(n / 7) + 1
        return answer;
    }
}

// 피자 한판에 7조각
