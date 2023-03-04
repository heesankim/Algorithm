function solution(my_string) {
    let result = my_string.toLowerCase()
    let answer = result.split("").sort().join("")
    return answer
}