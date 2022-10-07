# N는 정수의 개수 S
# S << 크기가 양수인 부분수열중에서 그 수열의 원소를 다 더한 값
# 첫째 줄에 합이 S가 되는 부분수열의 개수를 출력한다.

# 입력 값
# 5 0
# -7 -3 -2 5 8
import sys
from itertools import combinations

N, S = map(int, sys.stdin.readline().split())


int_list = list(map(int, sys.stdin.readline().split()))
count = 0
combinated = []


def combination(n):
    if n == 0:
        return
    global combinated
    combinated.append(list(combinations(int_list, n)))  # [(-7, -3 ,-2 ,5, 8)] 형식으로 생겨남
    # append 되면은 [[(-7, -3 ,-2 ,5, 8)]]
    combination(n-1)


combination(N)

for com in combinated: # [()]
    for sub in com:  # sub => ()덩어리 합이 S이면
        if sum(sub) == S:
            count = count + 1


print(count)


# -----------홍리경님 풀이 ---------------
# import sys
# input = sys.stdin.readline
# n, s = map(int, input().split())
# arr = list(map(int, input().split()))
# cnt = 0
# def subset_sum(idx, sub_sum):
#     global cnt
#     if idx >= n:
#         return
#     sub_sum += arr[idx]
#     if sub_sum == s:
#         cnt += 1
#     # 현재 arr[idx]를 선택한 경우의 가지
#     subset_sum(idx+1, sub_sum)
#     # 현재 arr[idx]를 선택하지 않은 경우의 가지
#     subset_sum(idx+1, sub_sum - arr[idx])
# subset_sum(0, 0)
# print(cnt)