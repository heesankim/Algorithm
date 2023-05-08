def solution(myString, pat):
    if myString.lower().find(pat.lower()) != -1:
        return 1
    return 0