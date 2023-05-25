function solution(myString) {
    var answer = '';
    for(let i = 0; i < myString.length; i++){
        if(myString[i] < "l"){
            answer = answer + "l"
        }else{
            answer = answer + myString[i]
        }
    }
    return answer;
}

// l보다 앞서면 전부 i로 바꿔라.



