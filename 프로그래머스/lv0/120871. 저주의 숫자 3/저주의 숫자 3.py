def solution(n):
    arr = []
    newArr = []
    delete = 0
    for i in range(1,200):
        arr.append(i)
    for i in arr:
        if str(i).find("3") != -1 or i % 3 == 0:
            delete = delete + 1
            continue
        else:
            newArr.append(i)
    return newArr[n - 1]

# 모범답안
# def solution(n):
#     answer = 0
#     for _ in range(n):
#         answer += 1

#         print("첫 answer", answer)
#         while answer % 3 == 0 or '3' in str(answer):
#             answer += 1
#             print(answer)
            
#     return answer