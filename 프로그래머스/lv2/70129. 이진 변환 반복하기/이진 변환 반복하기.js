function solution(s) {

    let answer = [0,0]

    while(s !== '1') {
        s = s.split(''); // 배열로 변환
        let temp = s.filter(v => v === '1').length; // s 중 1의 개수
        answer[0] ++; // 변환 횟수 +1
        answer[1] += s.length - temp; // 빼는 0의 개수 저장 
        s = temp.toString(2); // 1의 개수를 이진수로 변환 후, 저장
    }

    return answer;
}

// 입력 : 이진문자열
// x의 모든 0을 제거한다.
// x의 길이는 c라고 한다
// 길이 c를 2진법으로 표현한다음 문자열로 변환한다.
// 결과 :  [1이될때까지 이진변환의횟수, 제거된 0의 개수] 
