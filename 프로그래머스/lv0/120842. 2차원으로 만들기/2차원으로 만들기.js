function solution(num_list, n) {
    let result = []
    var answer = [];
    let count = 0
    for(let i = 0; i < num_list.length; i++){
        answer.push(num_list[i])
        count++
        console.log(answer)
        if(count === n){
            result.push(answer)
            count = 0
            answer = []
        }
    }
    return result;
}