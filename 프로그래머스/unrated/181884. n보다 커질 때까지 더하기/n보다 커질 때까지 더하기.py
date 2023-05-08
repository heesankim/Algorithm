def solution(numbers, n):
    answer = 0
    for i in range(len(numbers)):
        answer = answer + numbers[i]
        if(answer > n): return answer