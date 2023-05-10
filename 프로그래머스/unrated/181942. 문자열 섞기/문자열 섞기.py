def solution(str1, str2):
    str = list(str1)
    answer = ''
    a = 1
    # print(str)
    for i in range(len(str2)):
        str.insert(a,str2[i])
        a = a + 2
    # print(str)
    return "".join(str)