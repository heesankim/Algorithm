x = int(input())
y = int(input())

print(x * (y % 10))
print(x * (y % 100 // 10))
print(x * (y // 100))
print(x * y)
