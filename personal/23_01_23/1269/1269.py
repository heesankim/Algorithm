# 대칭차집합
N = input().split(" ")

# print(N)

A = set(list(map(int, input().split(" "))))
B = set(list(map(int, input().split(" "))))

# print(A)
# print(B)

print(len((A | B) - (A & B)))
