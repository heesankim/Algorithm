import sys

input = sys.stdin.readline

number_list = []

for _ in range(10):
    number = int(input())
    number_list.append(number % 42)

print(len(set(number_list)))



