function solution(n, k) {
    var answer = 0;
        let service = parseInt( n / 10)
        console.log(service)
        answer = (12000 * n) + (2000 * (k - service))
    return answer;
}

// n이 10으로 나눴을때 나머지가 0이면 몫만큼 음료수 갯수를 뺸다
