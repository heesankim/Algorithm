def solution(my_strings, parts):
    answer = ''
    for i in range(len(parts)): # 0 1 2 3
        for j in range(parts[i][0],parts[i][1] + 1):
            answer = answer + my_strings[i][j]
    return answer