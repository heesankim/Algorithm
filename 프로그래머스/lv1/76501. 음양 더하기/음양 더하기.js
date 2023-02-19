function solution(absolutes, signs) {
    // var answer = 123456789;
    let sum = 0
    if(absolutes.length !== signs.length) return null
    if(absolutes.length < 1 || absolutes.length > 1000) return null
    for (let i = 0; i < absolutes.length; i++){
        if(signs[i] === true){
            sum = sum + absolutes[i]
        }else{
            sum = sum - absolutes[i]
        }
    }
    console.log(sum)
    return sum
}