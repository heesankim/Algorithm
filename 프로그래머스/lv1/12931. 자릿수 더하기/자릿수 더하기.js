function solution(n)
{
    let arr = String(n).split("").map(Number)
    const sum = arr.reduce(function add(sum, currValue){
        return sum + currValue
    })
    
    return sum
    

}