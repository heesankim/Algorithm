
function solution(answers) {

    let answer = [];
    // supo : 수포자 찍는 방식
    let supo = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    // 수포자들의 점수를 넣을 배열
    let score = [];
    // 수포자 수 만큼 for문
    for (let i = 0; i < supo.length; i++) {
        // 정답 수 초기화
        let result = 0;

        // 시험문제 수 만큼 for문
        for (let j = 0; j < answers.length; j++) {
            // ex) [1,2,3,4,5] = 0~4번 인덱스의 값이 반복으로 들어가니
            // 5로 나눈 나머지 인덱스의 값을 계속 넣어주면 된다.
            supoAnswers = supo[i][j % supo[i].length];

            // 맞은 숫자를 구한다
            if (answers[j] === supoAnswers) {
                result++;
            }
        }
        // 맞은 숫자를 점수배열에 넣어준다.
        score.push(result);
    }

    // 맞은 점수가 최고점과 같을 경우 해당 인덱스를 answer 배열에 넣는다.
    for (let i = 0; i < score.length; i++) {
        if (score[i] === Math.max(...score)) {
            answer.push(i + 1);
        }
    }

    return answer;
}