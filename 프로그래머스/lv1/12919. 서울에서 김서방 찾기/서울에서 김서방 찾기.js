function solution(seoul) {
    var answer = '';
    if(seoul.includes("Kim")){
        answer = `김서방은 ${seoul.indexOf("Kim")}에 있다`
    }
    return answer;
}