def solution(myString):
    answer = ''
    for i in myString:
        if i == "A":
            answer = answer + i
        elif i == "a":
            answer = answer + i.upper()
        else:
            answer = answer + i.lower()
    return answer