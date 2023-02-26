function solution(s){
    var answer = true;
    let cnt1 = 0
    let cnt2 = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'P'|| s[i] === 'p'){
            cnt1 = cnt1 + 1
        }else if(s[i] === 'Y' || s[i] === 'y'){
            cnt2 = cnt2 + 1
        }else continue
    }
    if(cnt1 !== cnt2) answer = false
    return answer;
}