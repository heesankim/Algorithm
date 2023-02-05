import sys

input = sys.stdin.readline

n = int(input())


def solve(a,b):
    return a + b


for i in range(n):
    a, b = map(int, input().split())
    print(solve(a,b))
