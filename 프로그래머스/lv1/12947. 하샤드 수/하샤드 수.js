function solution(x) {
    let arr = String(x).split("").map(Number)
    const result  = arr.reduce((sum ,currValue) =>{
        return sum + currValue
    },0)
    if(x % result !== 0){
        return false
    }
    return true
}


// x가 x의 자릿수의 합으로 나누어떨어지면 x는 하샤드 수이다.
