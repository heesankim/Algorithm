import sys

input = sys.stdin.readline

n = int(input())
integer_list = list(map(int, input().split()))
m = int(input())
print(integer_list.count(m))
