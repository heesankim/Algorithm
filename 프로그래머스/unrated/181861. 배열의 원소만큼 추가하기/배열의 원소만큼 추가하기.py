def solution(arr):
    # 원소가 n이면 n을 n번 append 해라
    answer = []
    for i in range(len(arr)):
        for _ in range(arr[i]):
            answer.append(arr[i])
    return answer