from itertools import combinations
def solution(number):
    answer = 0
    for i in combinations(number, 3):
    # print(i, end=" ")
        if sum(i) == 0:
            answer = answer + 1
    return answer




# 무작위 3명의 합이 0이면 삼총사 1팀 -> 몇팀을 만들 수 있는가? 
# number 배열에서 3명을 뽑아 0을 만들 수 있는 갯수를 구하라.


# 15분?