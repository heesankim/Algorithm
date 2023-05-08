def solution(myString, pat):
    answer = 0
    result = ""
    for i in range(len(myString)):
        if myString[i] == "A":
            result = result + "B"
        else:
            result = result + "A"
    if result.find(pat) != -1:
        return 1
    return answer