import sys

input = sys.stdin.readline

n = int(input())

for _ in range(n):
    str = input().strip()
    print(str[0], end="")
    print(str[len(str)-1],)
