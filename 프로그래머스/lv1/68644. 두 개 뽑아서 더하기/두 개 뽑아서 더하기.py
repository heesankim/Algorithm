def solution(numbers):
    # 서로 다른 인덱스에서 두개의 수를 뽑아 만들 수 있는 모든 수를 배열에 오름차순으로 담는다.
    answer = []
    for i in range(0,len(numbers) -1):
        # print(numbers[i])
        for j in range(i+1,len(numbers)):
            # print(numbers[j])
            answer.append(numbers[i] + numbers[j])
    result = list(set(answer))
    final = sorted(result)
    return final