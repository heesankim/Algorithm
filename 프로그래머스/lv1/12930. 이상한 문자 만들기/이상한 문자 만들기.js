function solution(s) {
    var answer = '';
    let StrToArr = s.split(" ")
    
    for(let i = 0; i < StrToArr.length; i++){
        for(let j = 0; j < StrToArr[i].length; j++){
            if((j + 1) % 2 === 1) answer = answer + StrToArr[i][j].toUpperCase() 
            else answer = answer + StrToArr[i][j].toLowerCase()
        }
        if(i === StrToArr.length - 1) break
        else answer = answer + " "
    }
    return answer;
}