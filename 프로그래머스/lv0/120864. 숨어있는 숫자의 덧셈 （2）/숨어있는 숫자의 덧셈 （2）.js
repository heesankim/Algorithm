function solution(my_string) {
    let sum = 0;
    let str = ""
    let temp = ""
    for(let i = 0; i < my_string.length; i++){
        temp = my_string[i]
        if(!isNaN(temp)) { // 만약 숫자형태라면
           str = str + temp // 일단 임시로 문자로 저장
            console.log(str)
        }
        else { // 숫자형태가 아니라면
            sum = sum + Number(str) // 저장되어 있는 str을 숫자로변환해서 sum에 더해줌
            str = ""
        }
        if(i === my_string.length - 1){
            sum = sum + Number(str)
        }
    }
    return sum
}