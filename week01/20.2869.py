A, B, V = map(int, input().split())

# 2 1 5
count = 0

while True:
    count = count + 1
    V = V - A
    if V <= 0:
      break
    V = V + B

print(count)
