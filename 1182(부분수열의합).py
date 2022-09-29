# N는 정수의 개수 S
# S << 크기가 양수인 부분수열중에서 그 수열의 원소를 다 더한 값
# 첫째 줄에 합이 S가 되는 부분수열의 개수를 출력한다.


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
    combinated.append(list(combinations(int_list, n)))
    combination(n-1)


combination(N)

for com in combinated: # []
    for sub in com:  # sub => ()
        if sum(sub) == S:
            count = count + 1


print(count)

