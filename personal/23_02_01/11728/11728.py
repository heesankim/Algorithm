import sys

input = sys.stdin.readline

n, m = map(int, input().split())


a = list(map(int, input().split()))
b = list(map(int, input().split()))

new_list = sorted(a+b)

print(*new_list)
