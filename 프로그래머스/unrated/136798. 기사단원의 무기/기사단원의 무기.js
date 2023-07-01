function solution(number, limit, power) {
    let answer = 0;
    for(let i = 1; i <= number; i++){
        let count = 0;
        for(let j = 1; j <= i / 2; j++){
            // 절반까지의 크기에 대한 약수의 갯수를 구하고 있다.
            if(i % j === 0){
                // 절반이 되기전 자신도 포함시켜야 하기때문에 구해진 약수의 갯수에 1을 더한다.
                count = count + 1
            }
        }
        if(count + 1 > limit){
            // 공격력이 제한수치를 넘으면 power로 대치.
            answer = answer + power
        }else{
            // 제한수치를 넘지 않으면 자신의 약수의 갯수가 공격력.
            answer = answer + (count + 1)
        }
    }
    
    return answer
}