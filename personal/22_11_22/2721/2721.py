import sys

input = sys.stdin.readline

T = int(input())


for i in range(T):
    n = int(input())
    T = 0
    sum = 0
    for j in range(1, n+1):
        for k in range(1, j+2):
            T = T + k
            sum = sum + j*T
            T = 0
    print(sum)
