function solution(n) {
    var answer = 0;
    let str = String(n).split("").map((item) =>+item)
    answer = str.reduce((a, b) => a + b)
    return answer;
}