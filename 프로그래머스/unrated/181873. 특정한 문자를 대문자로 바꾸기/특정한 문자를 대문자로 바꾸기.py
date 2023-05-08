def solution(my_string, alp):
    answer = ''
    for i in range(len(my_string)):
        if my_string[i] == alp:
            answer = answer + alp.upper()
        else:
            answer = answer +my_string[i]
    return answer