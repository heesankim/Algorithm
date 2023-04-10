function solution(dots) {
    var answer = 0;
    // 첫 번째 요소를 기준으로 오름차순 정렬
    const sortedWidth = [...dots].sort((a, b) => a[0] - b[0])

    // 두 번째 요소를 기준으로 오름차순 정렬
    const sortedLength = [...dots].sort((a, b) => a[1] - b[1])

    answer = (sortedWidth[3][0] - sortedWidth[0][0]) * (sortedLength[3][1] - sortedLength[0][1])
    return answer;
}