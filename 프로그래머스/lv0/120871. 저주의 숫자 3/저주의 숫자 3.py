def solution(n):
    arr = []
    newArr = []
    for i in range(1,200):
        arr.append(i)
    for i in arr:
        if str(i).find("3") != -1 or i % 3 == 0:
            continue
        else:
            newArr.append(i)
    # print(newArr)
    return newArr[n-1]
