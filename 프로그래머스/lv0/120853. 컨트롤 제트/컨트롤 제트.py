def solution(s):
    s = s.split(" ")
    answer = 0
    for i in range(len(s)):
        if s[i] == "Z":
            answer = answer - int(s[i-1])
        else:
            answer = answer + int(s[i])
    return answer