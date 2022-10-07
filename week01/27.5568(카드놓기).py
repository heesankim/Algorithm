
# 카드 n(4 ≤ n ≤ 10)장을 바닥에 나란히 놓고 놀고있다
# 각 카드는 1 이상 99이하의 정수

# ex) 1,2,3,13,21 카드가 5장 있다고 치자
# 3장을 선택해서 정수를 만듬
# 2, 1, 13 을 순서대로 나열하면 정수 2113을 만들 수 있다.
# 21, 1, 3 을 순서대로 나열해도 정수 2113을 만들 수 있다.

# n장의 카드에 적힌 숫자가 주어졌을 때, 그 중에서 k개를 선택해서 만들 수 있는 정수의 개수를 구하는 프로그램을 작성하시오.

# 입력 (단 , 카드에는 1이상 99이하의 정수가 적혀져 있다.)
# N (바닥의 카드 갯수)
# K (선택한 카드의 개수)
# 카드 숫자
# 카드 숫자
# 카드 숫자
# 카드 숫자
# 카드 숫자
# 카드 숫자

# 1 , 2 , 12 , 1 이중 2개를 뽑아 만들수 있는 정수의 갯수는? 7개
# 중복은 제거 한다.
# why? 12 , 112 , 11, 21, 212, 21, 121, 122, 121, 11, 12, 112
# 12 , 112 , 11, 21, 212, , 121, 122,

# 순열을 짜보자

import sys

N = int(input())
k = int(input())

card_list = []
for i in range(N):
    card_list.append(int(sys.stdin.readline()))

check = [False] * N
permutations = [0] * k
answers = []

# 순열을 구현할 때는 변수로 내가 몇장을 나열할껀지에 대한 수가 들어와야 함
# def permutation(k):

# ex)
# # N = 4 이고 k = 2일떄
# print(check)  # [False,False,False,False]
# print(permutations)  # [0,0]


def operate(a):
    if a == k:
        target = ""  # 빈문자열
        for j in permutations:
            target = target + str(j)
        answers.append(target)
        return

    for i in range(0, len(card_list)):
        if not check[i]:
            check[i] = True
            permutations[a] = card_list[i]
            operate(a+1)
            check[i] = False

# 순열을 구현하는 코드를 더 이해하자.

operate(0)
print(answers)
print(len(set(answers)))
