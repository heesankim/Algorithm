def solution(t, p):
    answer = 0
    leng = len(p)
    for i in range(len(t) -(leng-1)):
        if int(t[i:i+leng]) <= int(p):
            answer = answer + 1
    return answer





# txt = "2013-05-11"
# print(txt[5:7])
# 05