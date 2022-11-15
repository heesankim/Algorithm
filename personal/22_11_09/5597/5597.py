import sys

input = sys.stdin.readline

students = []
for i in range(1, 31):
    students.append(i)

for data in range(28):
    data = int(input())
    students.remove(data)

print(min(students))
print(max(students))
