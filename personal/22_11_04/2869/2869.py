import sys

input = sys.stdin.readline

a, b, v = map(int, input().split())


def solve(a, b, V):

    if (V-b) % (a-b) == 0:
        print((V-b) // (a-b))
    else:
        print(((V-b) // (a-b)) + 1)


solve(a, b, v)
