import sys
# 소인수 분해
input = sys.stdin.readline

n = int(input())

m = 2

while n != 1:
    if n % m == 0:
        print(m)
        n = n // m
    else:
        m = m + 1
