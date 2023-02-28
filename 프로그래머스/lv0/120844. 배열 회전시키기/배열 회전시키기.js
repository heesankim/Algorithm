function solution(numbers, direction) {
    // var answer = [];
    if(direction === "right"){
        let p = numbers.pop()
        numbers.unshift(p)
    }else{
        let shi = numbers.shift()
        numbers.push(shi)
    }
    return numbers;
}