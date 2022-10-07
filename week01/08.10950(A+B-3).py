T = int(input())

value = []
for i in range(T):
    a, b = map(int, input().split(" "))
    value.append(a+b)


for i in value:
    print(i)
