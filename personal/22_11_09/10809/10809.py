import sys

input = sys.stdin.readline


alphabet = ["a", "b", "c", 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
str = input().strip()

for i in alphabet:
    if i in str:
        print(str.index(i), end=" ")
    else:
        print(-1, end=" ")
