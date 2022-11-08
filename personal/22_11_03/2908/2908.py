import sys

input = sys.stdin.readline

a, b = map(int, input().split())

first_value = ((a % 10) * 100) + (a % 100 // 10 * 10) + (a // 100)
second_value = ((b % 10) * 100) + (b % 100 // 10 * 10) + (b // 100) 

print(max(first_value,second_value))

