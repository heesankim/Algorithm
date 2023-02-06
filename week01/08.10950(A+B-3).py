# T = int(input())

# value = []
# for i in range(T):
#     a, b = map(int, input().split(" "))
#     value.append(a+b)


# for i in value:
#     print(i)


# 수료직전 풀이
import sys

input = sys.stdin.readline

n = int(input())


def solve(a,b):
    return a + b


for i in range(n):
    a, b = map(int, input().split())
    print(solve(a,b))
