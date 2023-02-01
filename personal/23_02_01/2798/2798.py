# 블랙잭
# 3명이서 게임
# N장의 카드를 숫자가 보이도록 바닥에 놓음 > 후에 딜러는 숫자 M을 외침


import sys

input = sys.stdin.readline

n, m = map(int, input().split())

# cards = []
arr = list(map(int, input().split()))

# print(arr)
result = 0
for i in range(n):
    for j in range(i+1, n):
        for k in range(j+1, n):
            sum = arr[i] + arr[j] + arr[k]
            if sum > m:
                continue
            else:
                result = max(result, sum)

print(result)
